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
  if (typeof window === "undefined" || !treatmentName) return null;
  const overrides = getAllTreatmentImageOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();
  
  // 1. Exact case-insensitive match
  for (const [key, value] of Object.entries(overrides)) {
    if (key.trim().toLowerCase() === normalizedTarget) {
      return value;
    }
  }

  // 2. Partial / Prefix match (e.g. "HIFU" matching "HIFU Tightening" or vice versa)
  for (const [key, value] of Object.entries(overrides)) {
    const k = key.trim().toLowerCase();
    if (k.length > 2 && (k.includes(normalizedTarget) || normalizedTarget.includes(k))) {
      return value;
    }
  }

  return null;
}

export function saveTreatmentImageOverride(treatmentName: string, base64DataUrl: string) {
  if (typeof window === "undefined" || !treatmentName) return;
  const overrides = getAllTreatmentImageOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();
  
  // Clear any existing matching key variant first
  for (const key of Object.keys(overrides)) {
    if (key.trim().toLowerCase() === normalizedTarget) {
      delete overrides[key];
    }
  }

  overrides[treatmentName.trim()] = base64DataUrl;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  } catch (e) {
    console.error("localStorage quota exceeded, attempting safe save", e);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch (err) {
      alert("Browser storage is full! Please remove some custom photos from admin.");
    }
  }
  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function removeTreatmentImageOverride(treatmentName: string) {
  if (typeof window === "undefined" || !treatmentName) return;
  const overrides = getAllTreatmentImageOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();

  for (const key of Object.keys(overrides)) {
    const k = key.trim().toLowerCase();
    if (k === normalizedTarget || (k.length > 2 && (k.includes(normalizedTarget) || normalizedTarget.includes(k)))) {
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
