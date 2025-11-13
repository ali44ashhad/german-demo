import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useGetCurrentUserQuery, useUpdateUserMutation } from "../store/apiSlice";
import { CheckCircle, Loader2, RefreshCw, XCircle } from "lucide-react";

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

const Profile = () => {
  const {
    data,
    isLoading: isUserLoading,
    isError: isUserError,
    refetch,
    error: userError,
  } = useGetCurrentUserQuery();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const user = data?.user;
  const userId = useMemo(() => user?._id || user?.id || user?.userId, [user]);

  const [formData, setFormData] = useState(initialFormState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const buildPayload = () => {
    const {
      name,
      profileImage,
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
      profileImage: profileImage.trim(),
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

    if (profileImage === "") delete payload.profileImage;
    if (country === "") delete payload.country;
    if (city === "") delete payload.city;
    if (highestQualification === "") delete payload.highestQualification;
    if (fieldOfStudy === "") delete payload.fieldOfStudy;
    if (marksOrCGPA === "") delete payload.marksOrCGPA;
    if (targetDegreeInGermany === "") delete payload.targetDegreeInGermany;
    if (desiredCourseProgram === "") delete payload.desiredCourseProgram;
    if (preferredIntake === "") delete payload.preferredIntake;
    if (englishProficiency === "") delete payload.englishProficiency;
    if (germanLanguageLevel === "") delete payload.germanLanguageLevel;
    if (workExperience === "") delete payload.workExperience;
    if (estimatedBudget === "") delete payload.estimatedBudget;
    if (shortlistedUniversities === "") delete payload.shortlistedUniversities;

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

    if (!userId) {
      setErrorMessage("Unable to determine user identifier.");
      return;
    }

    try {
      const payload = buildPayload();
      const response = await updateUser({ id: userId, ...payload }).unwrap();
      if (response?.success) {
        setSuccessMessage("Profile updated successfully.");
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Complete Your Profile</h2>
              <p className="text-gray-600 mb-10">
                Provide additional details to help us personalise your journey. Email and mobile number cannot be modified here.
              </p>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Personal Details */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL</label>
                      <input
                        type="url"
                        name="profileImage"
                        value={formData.profileImage}
                        onChange={handleInputChange}
                        placeholder="https://example.com/photo.jpg"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                  </div>
                </section>

                {/* Academic Details */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Details</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Highest Qualification</label>
                      <input
                        type="text"
                        name="highestQualification"
                        value={formData.highestQualification}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study</label>
                      <input
                        type="text"
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                      <input
                        type="number"
                        name="graduationYear"
                        min="1950"
                        max={new Date().getFullYear() + 5}
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Marks / CGPA</label>
                      <input
                        type="text"
                        name="marksOrCGPA"
                        value={formData.marksOrCGPA}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Target Degree in Germany</label>
                      <input
                        type="text"
                        name="targetDegreeInGermany"
                        value={formData.targetDegreeInGermany}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Desired Course / Program</label>
                      <input
                        type="text"
                        name="desiredCourseProgram"
                        value={formData.desiredCourseProgram}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Intake</label>
                      <input
                        type="text"
                        name="preferredIntake"
                        value={formData.preferredIntake}
                        onChange={handleInputChange}
                        placeholder="Winter / Summer"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">English Proficiency</label>
                      <input
                        type="text"
                        name="englishProficiency"
                        value={formData.englishProficiency}
                        onChange={handleInputChange}
                        placeholder="IELTS / TOEFL / PTE"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">German Language Level</label>
                      <input
                        type="text"
                        name="germanLanguageLevel"
                        value={formData.germanLanguageLevel}
                        onChange={handleInputChange}
                        placeholder="None / A1 / A2 / B1 / B2 / C1"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                  </div>
                </section>

                {/* Professional & Financial */}
                <section>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional & Planning</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience</label>
                      <textarea
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget</label>
                      <input
                        type="text"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shortlisted Universities</label>
                      <textarea
                        name="shortlistedUniversities"
                        value={formData.shortlistedUniversities}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


