// PDF.js worker configuration
// This file must be imported before any react-pdf components are used

import { pdfjs } from "react-pdf";

// Set up PDF.js worker - using local file for better reliability
if (typeof window !== "undefined") {
  // Use absolute URL to ensure it works correctly
  const workerUrl = `${window.location.origin}/pdf.worker.min.mjs`;
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  
  // Log for debugging (remove in production)
  console.log("PDF.js worker configured:", workerUrl);
}

