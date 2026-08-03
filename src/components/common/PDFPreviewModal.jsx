import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Save, XCircle } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up PDF.js worker - using version that matches react-pdf's bundled pdfjs-dist (5.4.296)
if (typeof window !== "undefined") {
  // Use local worker file (copied from react-pdf's bundled pdfjs-dist) for better reliability
  // This ensures version compatibility (react-pdf@10.2.0 uses pdfjs-dist@5.4.296)
  pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.5.4.296.min.mjs`;
}

const PDFPreviewModal = ({
  isOpen,
  onClose,
  pdfDataUrl,
  onSave,
  onDiscard,
  isLoading = false,
  title = "Document preview",
  downloadFilename = "document.pdf",
  headerSlot = null,
}) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [scale, setScale] = React.useState(1.0);
  const [pdfBlobUrl, setPdfBlobUrl] = React.useState(null);
  const [isLoadingPdf, setIsLoadingPdf] = React.useState(false);
  const [pdfError, setPdfError] = React.useState(null);
  const [retryKey, setRetryKey] = React.useState(0);
  const retryTimeoutRef = React.useRef(null);
  const abortControllerRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      setPageNumber(1);
      setScale(1.0);
      setPdfError(null);
    }
  }, [isOpen]);

  // Reset page when switching documents (e.g. biodata ↔ inquiry tabs)
  React.useEffect(() => {
    setPageNumber(1);
    setNumPages(null);
  }, [pdfDataUrl]);

  // Fetch PDF with credentials if it's a backend URL
  React.useEffect(() => {
    let currentBlobUrl = null;
    let retryCount = 0;
    const maxRetries = 5;
    const initialDelay = 500; // Start with 500ms delay
    
    // Cleanup function
    const cleanup = () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      if (currentBlobUrl) {
        URL.revokeObjectURL(currentBlobUrl);
        currentBlobUrl = null;
      }
    };
    
    // Only fetch through backend if it's a backend API URL
    // Direct Cloudinary URLs can be used directly
    if (pdfDataUrl && pdfDataUrl.startsWith('http') && pdfDataUrl.includes('/api/')) {
      setIsLoadingPdf(true);
      setPdfError(null);
      
      const fetchPdf = async (delay = initialDelay) => {
        // Clear any existing timeout
        if (retryTimeoutRef.current) {
          clearTimeout(retryTimeoutRef.current);
        }

        // Wait for the delay before fetching
        retryTimeoutRef.current = setTimeout(async () => {
          try {
            // Create new abort controller for this request
            abortControllerRef.current = new AbortController();
            
            // Use the pdfDataUrl directly (includes cache-busting parameter if provided)
            const response = await fetch(pdfDataUrl, {
              credentials: 'include',
              signal: abortControllerRef.current.signal,
              headers: {
                'Accept': 'application/pdf',
              },
            });
            
            if (response.ok) {
              const blob = await response.blob();
              
              // Verify it's actually a PDF
              if (blob.type !== 'application/pdf' && blob.size > 0) {
                throw new Error('Invalid PDF format received');
              }
              
              const blobUrl = URL.createObjectURL(blob);
              currentBlobUrl = blobUrl;
              setPdfBlobUrl(blobUrl);
              setIsLoadingPdf(false);
              setPdfError(null);
              retryCount = 0; // Reset retry count on success
            } else if (response.status === 401) {
              // Authentication error - retry with exponential backoff
              if (retryCount < maxRetries) {
                retryCount++;
                const backoffDelay = initialDelay * Math.pow(2, retryCount - 1); // Exponential backoff
                console.log(`PDF fetch failed with 401, retrying in ${backoffDelay}ms (attempt ${retryCount}/${maxRetries})`);
                fetchPdf(backoffDelay);
              } else {
                setIsLoadingPdf(false);
                setPdfError('Authentication failed. Please try refreshing the page.');
                console.error('Max retries reached for PDF fetch');
              }
            } else if (response.status === 404) {
              // PDF not found - might not be ready yet, retry
              if (retryCount < maxRetries) {
                retryCount++;
                const backoffDelay = initialDelay * Math.pow(2, retryCount - 1);
                console.log(`PDF not found, retrying in ${backoffDelay}ms (attempt ${retryCount}/${maxRetries})`);
                fetchPdf(backoffDelay);
              } else {
                setIsLoadingPdf(false);
                setPdfError('Resume PDF not found. Please save your profile again.');
              }
            } else {
              setIsLoadingPdf(false);
              setPdfError(`Failed to load PDF: ${response.status} ${response.statusText}`);
            }
          } catch (error) {
            if (error.name === 'AbortError') {
              // Request was aborted, ignore
              return;
            }
            
            console.error('Error fetching PDF:', error);
            
            // Retry on network errors
            if (retryCount < maxRetries) {
              retryCount++;
              const backoffDelay = initialDelay * Math.pow(2, retryCount - 1);
              console.log(`PDF fetch error, retrying in ${backoffDelay}ms (attempt ${retryCount}/${maxRetries})`);
              fetchPdf(backoffDelay);
            } else {
              setIsLoadingPdf(false);
              setPdfError('Failed to load PDF. Please try again later.');
            }
          } finally {
            abortControllerRef.current = null;
          }
        }, delay);
      };
      
      // Start fetching with initial delay
      fetchPdf(initialDelay);
    } else {
      setPdfBlobUrl(null);
      setIsLoadingPdf(false);
      setPdfError(null);
    }

    // Cleanup on unmount or when pdfDataUrl changes
    return () => {
      cleanup();
      // Also cleanup any existing blob URL
      setPdfBlobUrl((prev) => {
        if (prev) {
          URL.revokeObjectURL(prev);
        }
        return null;
      });
    };
  }, [pdfDataUrl, isOpen, retryKey]);

  const onDocumentLoadSuccess = ({ numPages: loadedPages }) => {
    setNumPages(loadedPages);
    setPageNumber((prev) => Math.min(Math.max(1, prev), loadedPages || 1));
  };

  const handleDownload = () => {
    const urlToDownload = pdfBlobUrl || pdfDataUrl;
    if (urlToDownload) {
      const link = document.createElement("a");
      link.href = urlToDownload;
      link.download = downloadFilename;
      // If it's a Cloudinary URL (starts with http), open in new tab and download
      // If it's a data URL or blob URL, use the download attribute
      if (urlToDownload.startsWith("http") && !urlToDownload.startsWith("blob:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-surface rounded-2xl shadow-2xl dark:shadow-black/50 w-full max-w-4xl max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              {headerSlot}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:focus-visible:ring-sky-600"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* PDF Viewer — keep page canvas area neutral; theme only chrome around it */}
          <div className="flex-1 overflow-auto bg-muted flex items-start justify-center pt-8 pb-6 px-6">
            {pdfError ? (
              <div className="flex flex-col items-center justify-center p-8 text-red-600 dark:text-red-400">
                <XCircle className="w-12 h-12 mb-4" />
                <p className="text-lg font-semibold mb-2">Failed to load PDF</p>
                <p className="text-sm text-muted-foreground text-center max-w-md">{pdfError}</p>
                <button
                  onClick={() => {
                    setPdfError(null);
                    setIsLoadingPdf(true);
                    setPdfBlobUrl(null);
                    // Trigger re-fetch by incrementing retryKey
                    setRetryKey((prev) => prev + 1);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : isLoadingPdf ? (
              <div className="flex flex-col items-center justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
                <p className="text-muted-foreground">Loading PDF...</p>
                <p className="text-sm text-muted-foreground/80 mt-2">This may take a few moments</p>
              </div>
            ) : !pdfDataUrl ? (
              <div className="flex flex-col items-center justify-center p-8 text-muted-foreground">
                <p>No PDF URL available.</p>
              </div>
            ) : (
              <div className="space-y-4 w-full flex flex-col items-center">
                <Document
                  key={pdfBlobUrl || pdfDataUrl} // Force re-render when PDF URL changes
                  file={pdfBlobUrl || pdfDataUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex items-center justify-center p-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center p-8 text-red-600 dark:text-red-400">
                      <XCircle className="w-12 h-12 mb-4" />
                      <p>Failed to render PDF. Please try again.</p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="shadow-lg"
                  />
                </Document>

                {/* PDF Controls */}
                {numPages && (
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
                      disabled={pageNumber <= 1}
                      className="px-4 py-2 rounded-lg bg-surface border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-muted-foreground">
                      Page {pageNumber} of {numPages}
                    </span>
                    <button
                      onClick={() => setPageNumber((prev) => Math.min(numPages, prev + 1))}
                      disabled={pageNumber >= numPages}
                      className="px-4 py-2 rounded-lg bg-surface border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                    </button>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => setScale((prev) => Math.max(0.5, prev - 0.25))}
                        className="px-3 py-2 rounded-lg bg-surface border border-border text-foreground hover:bg-muted transition-colors"
                        aria-label="Zoom out"
                      >
                        -
                      </button>
                      <span className="text-sm text-muted-foreground w-16 text-center">
                        {Math.round(scale * 100)}%
                      </span>
                      <button
                        onClick={() => setScale((prev) => Math.min(2, prev + 0.25))}
                        className="px-3 py-2 rounded-lg bg-surface border border-border text-foreground hover:bg-muted transition-colors"
                        aria-label="Zoom in"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between p-6 border-t border-border bg-muted">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-muted-foreground font-semibold hover:bg-muted transition-all"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={onDiscard}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-red-300 dark:border-red-800 bg-surface text-red-700 dark:text-red-400 font-semibold hover:bg-red-50 dark:hover:bg-red-950/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <XCircle className="w-5 h-5" />
                Discard
              </button>
              <button
                onClick={onSave}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Save
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PDFPreviewModal;

