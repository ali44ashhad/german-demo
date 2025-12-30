import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  useGetCurrentUserQuery,
  useUpdateCurrentUserProfileMutation,
  useUploadProfileImageMutation,
} from "../store/apiSlice";
import { CheckCircle, Loader2, RefreshCw, XCircle, Upload, X, FileText, Edit } from "lucide-react";
import PDFPreviewModal from "../components/common/PDFPreviewModal";

const needHelpOptions = [
  { value: "SOP", label: "Statement of Purpose (SOP)" },
  { value: "LOR", label: "Letter of Recommendation (LOR)" },
  { value: "Application Process", label: "Application Process" },
];

const initialFormState = {
  name: "",
  profileImage: "",
  dateOfBirth: "",
  country: "",
  city: "",
  highestQualification: "",
  fieldOfStudy: "",
  graduationYear: "",
  marksOrCGPA: "",
  targetDegreeInGermany: "",
  desiredCourseProgram: "",
  preferredIntake: "",
  englishProficiency: "",
  germanLanguageLevel: "",
  workExperience: "",
  estimatedBudget: "",
  shortlistedUniversities: "",
  needHelpWith: [],
  agreedToTerms: false,
};

const formatRole = (role) => {
  if (!role) return "";
  return role
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

// Define mandatory fields
const mandatoryFields = [
  "name",
  "dateOfBirth",
  "country",
  "city",
  "highestQualification",
  "fieldOfStudy",
  "graduationYear",
  "marksOrCGPA",
  "targetDegreeInGermany",
  "desiredCourseProgram",
  "preferredIntake",
  "englishProficiency",
  "germanLanguageLevel",
  "workExperience",
  "estimatedBudget",
  "shortlistedUniversities",
];

const Profile = () => {
  const {
    data,
    isLoading: isUserLoading,
    isError: isUserError,
    refetch,
    error: userError,
  } = useGetCurrentUserQuery();
  const [updateCurrentUserProfile, { isLoading: isUpdating }] =
    useUpdateCurrentUserProfileMutation();
  const [uploadProfileImage, { isLoading: isUploadingImage }] =
    useUploadProfileImageMutation();

  const user = data?.user;

  const [formData, setFormData] = useState(initialFormState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [showPDFPreview, setShowPDFPreview] = useState(false);
  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [isSavingPDF, setIsSavingPDF] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (!user) return;

    setFormData({
      name: user.name || "",
      profileImage: user.profileImage || "",
      dateOfBirth: user.dateOfBirth ? user.dateOfBirth.substring(0, 10) : "",
      country: user.country || "",
      city: user.city || "",
      highestQualification: user.highestQualification || "",
      fieldOfStudy: user.fieldOfStudy || "",
      graduationYear: user.graduationYear ? String(user.graduationYear) : "",
      marksOrCGPA: user.marksOrCGPA || "",
      targetDegreeInGermany: user.targetDegreeInGermany || "",
      desiredCourseProgram: user.desiredCourseProgram || "",
      preferredIntake: user.preferredIntake || "",
      englishProficiency: user.englishProficiency || "",
      germanLanguageLevel: user.germanLanguageLevel || "",
      workExperience: user.workExperience || "",
      estimatedBudget: user.estimatedBudget || "",
      shortlistedUniversities: user.shortlistedUniversities || "",
      needHelpWith: user.needHelpWith || [],
      agreedToTerms: Boolean(user.agreedToTerms),
    });
    setImagePreview(user.profileImage || null);
    
    // Initialize edit mode: if resume exists, start in view mode; otherwise, show form
    setIsEditMode(!user.resumePdf);
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => {
      const updated = new Set(prev.needHelpWith || []);
      if (checked) {
        updated.add(value);
      } else {
        updated.delete(value);
      }
      return {
        ...prev,
        needHelpWith: Array.from(updated),
      };
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleToggleAgreed = (event) => {
    const { checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: checked,
    }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select a valid image file");
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("Image size must be less than 5MB");
      return;
    }

    setSelectedFile(file);
    setErrorMessage("");

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    try {
      setErrorMessage("");
      const response = await uploadProfileImage(selectedFile).unwrap();
      if (response?.success) {
        setSuccessMessage("Profile image uploaded successfully!");
        setSelectedFile(null);
        refetch();
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage(response?.message || "Failed to upload image");
      }
    } catch (error) {
      const apiMessage = error?.data?.message || error?.message;
      setErrorMessage(apiMessage || "Failed to upload image. Please try again.");
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview(user?.profileImage || null);
    setErrorMessage("");
  };

  const validateForm = () => {
    const errors = {};
    
    mandatoryFields.forEach((field) => {
      const value = formData[field];
      if (!value || (typeof value === "string" && value.trim() === "")) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    // Validate graduationYear is a valid number
    if (formData.graduationYear) {
      const parsedYear = parseInt(formData.graduationYear, 10);
      if (Number.isNaN(parsedYear)) {
        errors.graduationYear = "Graduation year must be a valid number";
      }
    }

    // Validate dateOfBirth
    if (formData.dateOfBirth) {
      const dob = new Date(formData.dateOfBirth);
      if (isNaN(dob.getTime())) {
        errors.dateOfBirth = "Date of birth must be a valid date";
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const buildPayload = () => {
    const {
      name,
      dateOfBirth,
      country,
      city,
      highestQualification,
      fieldOfStudy,
      graduationYear,
      marksOrCGPA,
      targetDegreeInGermany,
      desiredCourseProgram,
      preferredIntake,
      englishProficiency,
      germanLanguageLevel,
      workExperience,
      estimatedBudget,
      shortlistedUniversities,
      needHelpWith,
      agreedToTerms,
    } = formData;

    const payload = {
      name: name.trim(),
      country: country.trim(),
      city: city.trim(),
      highestQualification: highestQualification.trim(),
      fieldOfStudy: fieldOfStudy.trim(),
      marksOrCGPA: marksOrCGPA.trim(),
      targetDegreeInGermany: targetDegreeInGermany.trim(),
      desiredCourseProgram: desiredCourseProgram.trim(),
      preferredIntake: preferredIntake.trim(),
      englishProficiency: englishProficiency.trim(),
      germanLanguageLevel: germanLanguageLevel.trim(),
      workExperience: workExperience.trim(),
      estimatedBudget: estimatedBudget.trim(),
      shortlistedUniversities: shortlistedUniversities.trim(),
      agreedToTerms,
    };

    if (dateOfBirth) {
      payload.dateOfBirth = dateOfBirth;
    }

    if (graduationYear) {
      const parsedYear = parseInt(graduationYear, 10);
      if (!Number.isNaN(parsedYear)) {
        payload.graduationYear = parsedYear;
      }
    }

    if (needHelpWith?.length) {
      payload.needHelpWith = needHelpWith;
    } else {
      payload.needHelpWith = [];
    }

    return payload;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setValidationErrors({});

    // Validate mandatory fields
    if (!validateForm()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const payload = buildPayload();
      const response = await updateCurrentUserProfile(payload).unwrap();
      if (response?.success) {
        setSuccessMessage("Profile updated successfully. Preview your resume below.");
        setIsEditMode(false); // Exit edit mode after successful save
        // Use backend proxy endpoint for PDF instead of direct Cloudinary URL
        // Add cache-busting parameter to ensure we get the latest PDF
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5005/api';
        const pdfUrl = response.resumePdf?.startsWith('http') 
          ? `${API_BASE_URL}/users/auth/resume/file?t=${Date.now()}`
          : response.resumePdf; // Fallback to base64 if it's not a URL
        setGeneratedPDF(pdfUrl);
        
        // Add a small delay before opening the modal to ensure PDF is ready
        // The PDFPreviewModal will handle retries if needed
        setTimeout(() => {
          setShowPDFPreview(true);
        }, 300);
        
        refetch();
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }
      } else {
        setErrorMessage(response?.message || "Unable to update profile.");
      }
    } catch (error) {
      const apiMessage = error?.data?.message || error?.message;
      setErrorMessage(apiMessage || "Something went wrong while updating your profile.");
    }
  };

  const handleSavePDF = async () => {
    setIsSavingPDF(true);
    try {
      // The PDF is already saved in the backend, we just need to close the modal
      setShowPDFPreview(false);
      setSuccessMessage("Resume saved successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      setErrorMessage("Failed to save resume. Please try again.");
    } finally {
      setIsSavingPDF(false);
    }
  };

  const handleDiscardPDF = () => {
    setShowPDFPreview(false);
    setGeneratedPDF(null);
    setSuccessMessage("");
  };

  const handleViewResume = () => {
    if (user?.resumePdf) {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5005/api';
      // Add cache-busting parameter to ensure we get the latest PDF
      const pdfUrl = user.resumePdf.startsWith('http') 
        ? `${API_BASE_URL}/users/auth/resume/file?t=${Date.now()}`
        : user.resumePdf;
      setGeneratedPDF(pdfUrl);
      setShowPDFPreview(true);
    }
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
    // Reset form data to user data
    if (user) {
      setFormData({
        name: user.name || "",
        profileImage: user.profileImage || "",
        dateOfBirth: user.dateOfBirth ? user.dateOfBirth.substring(0, 10) : "",
        country: user.country || "",
        city: user.city || "",
        highestQualification: user.highestQualification || "",
        fieldOfStudy: user.fieldOfStudy || "",
        graduationYear: user.graduationYear ? String(user.graduationYear) : "",
        marksOrCGPA: user.marksOrCGPA || "",
        targetDegreeInGermany: user.targetDegreeInGermany || "",
        desiredCourseProgram: user.desiredCourseProgram || "",
        preferredIntake: user.preferredIntake || "",
        englishProficiency: user.englishProficiency || "",
        germanLanguageLevel: user.germanLanguageLevel || "",
        workExperience: user.workExperience || "",
        estimatedBudget: user.estimatedBudget || "",
        shortlistedUniversities: user.shortlistedUniversities || "",
        needHelpWith: user.needHelpWith || [],
        agreedToTerms: Boolean(user.agreedToTerms),
      });
    }
    setSuccessMessage("");
    setErrorMessage("");
    setValidationErrors({});
  };

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-green-50">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

  if (isUserError || !user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-sky-50 to-green-50 px-4">
        <XCircle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Unable to load profile</h1>
        <p className="text-gray-600 text-center max-w-md mb-6">
          {userError?.data?.message ||
            "We could not retrieve your profile information right now. Please try again shortly."}
        </p>
        <button
          type="button"
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 to-sky-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
        >
          <RefreshCw className="w-5 h-5" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-green-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-sky-600 px-8 py-10 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/80">Welcome back</p>
                <h1 className="text-4xl font-bold mt-2">{user.name}</h1>
                <p className="text-white/80 mt-3">{formatRole(user.role)}</p>
              </div>
              <div className="flex flex-col md:items-end gap-2 text-white/90">
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                {user.contactNumber && (
                  <p>
                    <span className="font-semibold">Contact:</span> {user.contactNumber}
                  </p>
                )}
                <p>
                  <span className="font-semibold">Member since:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              {user.profileImage && (
                <div className="md:col-span-2 flex justify-center">
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
              )}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Basic Information</p>
                <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
                  <div>
                    <p className="text-xs uppercase text-gray-400">Name</p>
                    <p className="text-gray-900 font-semibold">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-400">Email</p>
                    <p className="text-gray-900 font-semibold">{user.email}</p>
                  </div>
                  {user.contactNumber && (
                    <div>
                      <p className="text-xs uppercase text-gray-400">Mobile</p>
                      <p className="text-gray-900 font-semibold">{user.contactNumber}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Latest Updates</p>
                <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
                  <div>
                    <p className="text-xs uppercase text-gray-400">Last Updated</p>
                    <p className="text-gray-900 font-semibold">
                      {user.updatedAt ? new Date(user.updatedAt).toLocaleString() : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-gray-400">Agreed to Terms</p>
                    <p className="text-gray-900 font-semibold">
                      {user.agreedToTerms ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {isEditMode ? "Edit Your Profile" : "Your Profile"}
                  </h2>
                  {!isEditMode && user?.resumePdf && (
                    <p className="text-gray-600 mt-2">
                      Your resume has been generated. View it below or edit your profile to update it.
                    </p>
                  )}
                  {!isEditMode && !user?.resumePdf && (
                    <p className="text-gray-600 mt-2">
                      Complete your profile to generate your resume.
                    </p>
                  )}
                  {isEditMode && (
                    <p className="text-gray-600 mt-2">
                      Update your information below. Email and mobile number cannot be modified here.
                    </p>
                  )}
                </div>
                {!isEditMode && user?.resumePdf && (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      type="button"
                      onClick={handleViewResume}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FileText className="w-5 h-5" />
                      View Resume
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={handleEditProfile}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Edit className="w-5 h-5" />
                      Edit Profile
                    </motion.button>
                  </div>
                )}
              </div>

              {(!user?.resumePdf || isEditMode) && (
                <form onSubmit={handleSubmit} className="space-y-12">
                {/* Personal Details */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.name
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.name && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profile Image
                      </label>
                      <div className="space-y-4">
                        {/* Image Preview */}
                        {imagePreview && (
                          <div className="relative inline-block">
                            <img
                              src={imagePreview}
                              alt="Profile preview"
                              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            {selectedFile && (
                              <button
                                type="button"
                                onClick={handleRemoveImage}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                title="Remove selected image"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        )}
                        
                        {/* File Input */}
                        <div className="flex items-center gap-4">
                          <label className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium cursor-pointer hover:bg-gray-50 transition-colors">
                            <Upload className="w-5 h-5" />
                            {selectedFile ? "Change Image" : "Upload Image"}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                              disabled={isUploadingImage}
                            />
                          </label>
                          
                          {selectedFile && (
                            <button
                              type="button"
                              onClick={handleImageUpload}
                              disabled={isUploadingImage}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-sky-600 text-white font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-60"
                            >
                              {isUploadingImage ? (
                                <>
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  Uploading...
                                </>
                              ) : (
                                "Upload"
                              )}
                            </button>
                          )}
                        </div>
                        
                        <p className="text-xs text-gray-500">
                          Supported formats: JPEG, PNG, GIF, WEBP. Max size: 5MB
                        </p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.dateOfBirth
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.dateOfBirth && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.dateOfBirth}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.country
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.country && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.country}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.city
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.city && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.city}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Academic Details */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Details</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Highest Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="highestQualification"
                        value={formData.highestQualification}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.highestQualification
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.highestQualification && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.highestQualification}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Field of Study <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.fieldOfStudy
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.fieldOfStudy && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.fieldOfStudy}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Graduation Year <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="graduationYear"
                        min="1950"
                        max={new Date().getFullYear() + 5}
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.graduationYear
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.graduationYear && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.graduationYear}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marks / CGPA <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="marksOrCGPA"
                        value={formData.marksOrCGPA}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.marksOrCGPA
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.marksOrCGPA && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.marksOrCGPA}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Degree in Germany <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="targetDegreeInGermany"
                        value={formData.targetDegreeInGermany}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.targetDegreeInGermany
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.targetDegreeInGermany && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.targetDegreeInGermany}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Desired Course / Program <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="desiredCourseProgram"
                        value={formData.desiredCourseProgram}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.desiredCourseProgram
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.desiredCourseProgram && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.desiredCourseProgram}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Intake <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="preferredIntake"
                        value={formData.preferredIntake}
                        onChange={handleInputChange}
                        placeholder="Winter / Summer"
                        className={`w-full rounded-xl border ${
                          validationErrors.preferredIntake
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.preferredIntake && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.preferredIntake}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        English Proficiency <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="englishProficiency"
                        value={formData.englishProficiency}
                        onChange={handleInputChange}
                        placeholder="IELTS / TOEFL / PTE"
                        className={`w-full rounded-xl border ${
                          validationErrors.englishProficiency
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.englishProficiency && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.englishProficiency}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        German Language Level <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="germanLanguageLevel"
                        value={formData.germanLanguageLevel}
                        onChange={handleInputChange}
                        placeholder="None / A1 / A2 / B1 / B2 / C1"
                        className={`w-full rounded-xl border ${
                          validationErrors.germanLanguageLevel
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.germanLanguageLevel && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.germanLanguageLevel}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Professional & Financial */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional & Planning</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Experience <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full rounded-xl border ${
                          validationErrors.workExperience
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.workExperience && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.workExperience}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border ${
                          validationErrors.estimatedBudget
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.estimatedBudget && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.estimatedBudget}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shortlisted Universities <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="shortlistedUniversities"
                        value={formData.shortlistedUniversities}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full rounded-xl border ${
                          validationErrors.shortlistedUniversities
                            ? "border-red-300"
                            : "border-gray-200"
                        } bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200`}
                        required
                      />
                      {validationErrors.shortlistedUniversities && (
                        <p className="mt-1 text-sm text-red-600">{validationErrors.shortlistedUniversities}</p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Assistance */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas Where You Need Assistance</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {needHelpOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:border-green-400 transition-colors"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={formData.needHelpWith.includes(option.value)}
                          onChange={handleCheckboxChange}
                          className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-gray-800 text-sm font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </section>

                <section className="flex items-center justify-between gap-4 bg-green-50 border border-green-200 rounded-2xl px-6 py-4">
                  <label className="flex items-center gap-3 text-sm text-green-800 font-medium">
                    <input
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={handleToggleAgreed}
                      className="h-5 w-5 rounded border-green-300 text-green-600 focus:ring-green-500"
                    />
                    I agree to share these details for a personalised experience.
                  </label>
                  <CheckCircle className={`w-6 h-6 ${formData.agreedToTerms ? "text-green-600" : "text-green-300"}`} />
                </section>

                {errorMessage && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}

                {successMessage && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-700">
                    {successMessage}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:justify-end gap-4 pt-4">
                  {isEditMode && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all"
                      disabled={isUpdating}
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(initialFormState);
                      if (user) {
                        setFormData({
                          name: user.name || "",
                          profileImage: user.profileImage || "",
                          dateOfBirth: user.dateOfBirth ? user.dateOfBirth.substring(0, 10) : "",
                          country: user.country || "",
                          city: user.city || "",
                          highestQualification: user.highestQualification || "",
                          fieldOfStudy: user.fieldOfStudy || "",
                          graduationYear: user.graduationYear ? String(user.graduationYear) : "",
                          marksOrCGPA: user.marksOrCGPA || "",
                          targetDegreeInGermany: user.targetDegreeInGermany || "",
                          desiredCourseProgram: user.desiredCourseProgram || "",
                          preferredIntake: user.preferredIntake || "",
                          englishProficiency: user.englishProficiency || "",
                          germanLanguageLevel: user.germanLanguageLevel || "",
                          workExperience: user.workExperience || "",
                          estimatedBudget: user.estimatedBudget || "",
                          shortlistedUniversities: user.shortlistedUniversities || "",
                          needHelpWith: user.needHelpWith || [],
                          agreedToTerms: Boolean(user.agreedToTerms),
                        });
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all"
                    disabled={isUpdating}
                  >
                    Reset
                  </button>
                  <motion.button
                    type="submit"
                    disabled={isUpdating}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
                    whileHover={!isUpdating ? { scale: 1.02 } : {}}
                    whileTap={!isUpdating ? { scale: 0.98 } : {}}
                  >
                    {isUpdating ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </span>
                    ) : (
                      "Save Changes"
                    )}
                  </motion.button>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      <PDFPreviewModal
        isOpen={showPDFPreview}
        onClose={() => setShowPDFPreview(false)}
        pdfDataUrl={generatedPDF}
        onSave={handleSavePDF}
        onDiscard={handleDiscardPDF}
        isLoading={isSavingPDF}
      />
    </div>
  );
};

export default Profile;


