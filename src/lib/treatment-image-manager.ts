const STORAGE_KEY = "alnemah_treatment_image_overrides_v1";

export function getAllTreatmentImageOverrides(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return {};
    const parsed = JSON.parse(saved);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (e) {
    console.error("Failed to load treatment image overrides", e);
    return {};
  }
}

export function getTreatmentImageOverride(treatmentName: string): string | null {
  const overrides = getAllTreatmentImageOverrides();
  const normalizedKey = treatmentName.trim().toLowerCase();
  for (const [key, value] of Object.entries(overrides)) {
    if (key.trim().toLowerCase() === normalizedKey) {
      return value;
    }
  }
  return null;
}

export function saveTreatmentImageOverride(treatmentName: string, base64DataUrl: string) {
  if (typeof window === "undefined") return;
  const overrides = getAllTreatmentImageOverrides();
  overrides[treatmentName.trim()] = base64DataUrl;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch (e) {
    console.error("localStorage quota exceeded, attempting to save override safely", e);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch (err) {
      alert("Browser storage is full! Please reset or remove some custom photos from the admin panel.");
    }
  }
  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function removeTreatmentImageOverride(treatmentName: string) {
  if (typeof window === "undefined") return;
  const overrides = getAllTreatmentImageOverrides();
  const normalizedKey = treatmentName.trim().toLowerCase();
  for (const key of Object.keys(overrides)) {
    if (key.trim().toLowerCase() === normalizedKey) {
      delete overrides[key];
    }
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch (e) {
    console.error(e);
  }
  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function resetTreatmentImageOverrides() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
  window.dispatchEvent(new Event("treatment_images_updated"));
}
