/**
 * Keep in sync with german-demo-backend/src/utils/profileDocumentNames.ts
 */

const MAX_SLUG_LEN = 60;

export const getProfileDisplayName = (user) => {
  const legal = user?.fullLegalName?.trim();
  if (legal) return legal;
  const name = user?.name?.trim();
  if (name) return name;
  return "User";
};

export const slugifyForFilename = (input, userIdFallback) => {
  let slug = (input || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");

  if (!slug && userIdFallback) {
    const suffix = String(userIdFallback).slice(-6);
    slug = `user_${suffix}`;
  }
  if (!slug) slug = "user";

  if (slug.length > MAX_SLUG_LEN) {
    slug = slug.slice(0, MAX_SLUG_LEN).replace(/_+$/, "");
  }
  return slug;
};

export const getProfilePdfFilenames = (user) => {
  const userId = user?._id ?? user?.id ?? "";
  const slug = slugifyForFilename(getProfileDisplayName(user), userId);

  return {
    biodata: `${slug}_Biodata.pdf`,
    inquiry: `${slug}_Student_Inquiry.pdf`,
  };
};
