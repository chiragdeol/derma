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
  // Normalize treatment name for matching
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  // Dispatch custom event to update components in real-time
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function resetTreatmentImageOverrides() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("treatment_images_updated"));
}
