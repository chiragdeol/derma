const STORAGE_KEY = "alnemah_treatment_image_overrides_v1";
const ALT_STORAGE_KEY = "alnemah_treatment_alt_overrides_v1";
const DB_NAME = "AlNemahTreatmentPhotosDB";
const STORE_NAME = "photos";

// In-memory cache for instant synchronous access across components
let inMemoryOverrides: Record<string, string> = {};
let inMemoryAltOverrides: Record<string, string> = {};
let dbInitialized = false;

const ALIAS_MAP: Record<string, string[]> = {
  "carbon laser peel (hollywood peel)": ["carbon laser facial", "carbon laser peel", "hollywood peel"],
  "prp facial (vampire facial)": ["prp facial rejuvenation", "prp facial", "vampire facial"],
  "hifu": ["hifu tightening", "hifu lift"],
  "vaginal tightening": ["vaginal tightening laser"],
  "tattoo removal": ["laser tattoo removal"],
  "orthodontic braces & retainers": ["orthodontic braces / invisalign"],
  "vitamin c iv therapy": ["vitamin c iv drip", "vitamin c iv", "vitamin c drip"],
  "hydration iv therapy": ["hydration iv drip", "hydration iv", "hydration drip"],
  "anti-aging iv therapy": ["anti-aging iv drip", "anti-aging iv", "anti aging drip"],
  "glow iv drip": ["glow iv therapy", "glow drip"],
};

// Open IndexedDB database
function openDB(): Promise<IDBDatabase | null> {
  if (typeof window === "undefined" || !("indexedDB" in window)) return Promise.resolve(null);
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 2);
      request.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
        if (!db.objectStoreNames.contains("alts")) {
          db.createObjectStore("alts");
        }
      };
      request.onsuccess = (e: any) => resolve(e.target.result);
      request.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

// Synchronously load from localStorage & trigger IndexedDB sync
export function getAllTreatmentImageOverrides(): Record<string, string> {
  if (typeof window === "undefined") return { ...inMemoryOverrides };
  
  // 1. Read from localStorage if in-memory is empty
  if (Object.keys(inMemoryOverrides).length === 0) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          inMemoryOverrides = { ...parsed };
        }
      }
    } catch (e) {
      console.error("Failed to read localStorage image overrides", e);
    }
  }

  // 2. Trigger background IndexedDB sync
  if (!dbInitialized) {
    dbInitialized = true;
    syncFromIndexedDB();
  }

  return { ...inMemoryOverrides };
}

export function getAllTreatmentAltOverrides(): Record<string, string> {
  if (typeof window === "undefined") return { ...inMemoryAltOverrides };

  if (Object.keys(inMemoryAltOverrides).length === 0) {
    try {
      const saved = localStorage.getItem(ALT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          inMemoryAltOverrides = { ...parsed };
        }
      }
    } catch (e) {
      console.error("Failed to read localStorage alt overrides", e);
    }
  }

  return { ...inMemoryAltOverrides };
}

export async function syncFromIndexedDB() {
  const db = await openDB();
  if (!db) return;
  try {
    const tx = db.transaction([STORE_NAME, "alts"], "readonly");
    const store = tx.objectStore(STORE_NAME);
    const altStore = tx.objectStore("alts");

    const reqPhotos = store.get("all_overrides");
    reqPhotos.onsuccess = (e: any) => {
      const idbData = e.target.result;
      if (idbData && typeof idbData === "object") {
        let changed = false;
        const newMap = { ...inMemoryOverrides };
        for (const [key, val] of Object.entries(idbData)) {
          if (typeof val === "string" && (!newMap[key] || newMap[key] !== val)) {
            newMap[key] = val;
            changed = true;
          }
        }
        if (changed) {
          inMemoryOverrides = newMap;
          saveToLocalStorage(STORAGE_KEY, inMemoryOverrides);
          window.dispatchEvent(new Event("treatment_images_updated"));
        }
      }
    };

    const reqAlts = altStore.get("all_alt_overrides");
    reqAlts.onsuccess = (e: any) => {
      const idbAltData = e.target.result;
      if (idbAltData && typeof idbAltData === "object") {
        let changed = false;
        const newAltMap = { ...inMemoryAltOverrides };
        for (const [key, val] of Object.entries(idbAltData)) {
          if (typeof val === "string" && (!newAltMap[key] || newAltMap[key] !== val)) {
            newAltMap[key] = val;
            changed = true;
          }
        }
        if (changed) {
          inMemoryAltOverrides = newAltMap;
          saveToLocalStorage(ALT_STORAGE_KEY, inMemoryAltOverrides);
          window.dispatchEvent(new Event("treatment_images_updated"));
        }
      }
    };
  } catch (e) {
    console.error("IndexedDB sync error", e);
  }
}

function saveToLocalStorage(keyName: string, data: Record<string, string>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(keyName, JSON.stringify(data));
  } catch (e) {
    console.warn("localStorage save quota exceeded", e);
  }
}

async function saveToIndexedDB(storeName: string, keyName: string, data: Record<string, string>) {
  const db = await openDB();
  if (!db) return;
  try {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put(data, keyName);
  } catch (e) {
    console.error("IndexedDB save error", e);
  }
}

export function getTreatmentImageOverride(treatmentName: string): string | null {
  if (typeof window === "undefined" || !treatmentName) return null;
  const overrides = getAllTreatmentImageOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();
  
  // 1. Direct exact case-insensitive match
  for (const [key, value] of Object.entries(overrides)) {
    if (key.trim().toLowerCase() === normalizedTarget) {
      return value;
    }
  }

  // 2. Alias match
  const aliases = ALIAS_MAP[normalizedTarget] || [];
  for (const alias of aliases) {
    for (const [key, value] of Object.entries(overrides)) {
      if (key.trim().toLowerCase() === alias) {
        return value;
      }
    }
  }

  // 3. Reverse Alias match
  for (const [key, value] of Object.entries(overrides)) {
    const normKey = key.trim().toLowerCase();
    const keyAliases = ALIAS_MAP[normKey] || [];
    if (keyAliases.includes(normalizedTarget)) {
      return value;
    }
  }

  // 4. Partial / Prefix match
  for (const [key, value] of Object.entries(overrides)) {
    const k = key.trim().toLowerCase();
    if (k.length > 2 && (k.includes(normalizedTarget) || normalizedTarget.includes(k))) {
      return value;
    }
  }

  return null;
}

export function getTreatmentAltOverride(treatmentName: string): string | null {
  if (typeof window === "undefined" || !treatmentName) return null;
  const altOverrides = getAllTreatmentAltOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();

  for (const [key, value] of Object.entries(altOverrides)) {
    if (key.trim().toLowerCase() === normalizedTarget) {
      return value;
    }
  }

  const aliases = ALIAS_MAP[normalizedTarget] || [];
  for (const alias of aliases) {
    for (const [key, value] of Object.entries(altOverrides)) {
      if (key.trim().toLowerCase() === alias) {
        return value;
      }
    }
  }

  return null;
}

export function saveTreatmentImageOverride(treatmentName: string, base64DataUrl: string) {
  if (typeof window === "undefined" || !treatmentName) return;
  const overrides = getAllTreatmentImageOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();
  
  for (const key of Object.keys(overrides)) {
    if (key.trim().toLowerCase() === normalizedTarget) {
      delete overrides[key];
    }
  }

  overrides[treatmentName.trim()] = base64DataUrl;
  inMemoryOverrides = { ...overrides };

  saveToLocalStorage(STORAGE_KEY, inMemoryOverrides);
  saveToIndexedDB(STORE_NAME, "all_overrides", inMemoryOverrides);

  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function saveTreatmentAltOverride(treatmentName: string, altText: string) {
  if (typeof window === "undefined" || !treatmentName) return;
  const altOverrides = getAllTreatmentAltOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();

  for (const key of Object.keys(altOverrides)) {
    if (key.trim().toLowerCase() === normalizedTarget) {
      delete altOverrides[key];
    }
  }

  if (altText && altText.trim()) {
    altOverrides[treatmentName.trim()] = altText.trim();
  }

  inMemoryAltOverrides = { ...altOverrides };

  saveToLocalStorage(ALT_STORAGE_KEY, inMemoryAltOverrides);
  saveToIndexedDB("alts", "all_alt_overrides", inMemoryAltOverrides);

  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function removeTreatmentImageOverride(treatmentName: string) {
  if (typeof window === "undefined" || !treatmentName) return;
  const overrides = getAllTreatmentImageOverrides();
  const altOverrides = getAllTreatmentAltOverrides();
  const normalizedTarget = treatmentName.trim().toLowerCase();

  for (const key of Object.keys(overrides)) {
    const k = key.trim().toLowerCase();
    if (k === normalizedTarget || (k.length > 2 && (k.includes(normalizedTarget) || normalizedTarget.includes(k)))) {
      delete overrides[key];
    }
  }
  for (const key of Object.keys(altOverrides)) {
    const k = key.trim().toLowerCase();
    if (k === normalizedTarget || (k.length > 2 && (k.includes(normalizedTarget) || normalizedTarget.includes(k)))) {
      delete altOverrides[key];
    }
  }

  inMemoryOverrides = { ...overrides };
  inMemoryAltOverrides = { ...altOverrides };

  saveToLocalStorage(STORAGE_KEY, inMemoryOverrides);
  saveToLocalStorage(ALT_STORAGE_KEY, inMemoryAltOverrides);
  saveToIndexedDB(STORE_NAME, "all_overrides", inMemoryOverrides);
  saveToIndexedDB("alts", "all_alt_overrides", inMemoryAltOverrides);

  window.dispatchEvent(new Event("treatment_images_updated"));
}

export function resetTreatmentImageOverrides() {
  if (typeof window === "undefined") return;
  inMemoryOverrides = {};
  inMemoryAltOverrides = {};
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ALT_STORAGE_KEY);
  } catch (e) {}

  openDB().then((db) => {
    if (!db) return;
    try {
      const tx = db.transaction([STORE_NAME, "alts"], "readwrite");
      tx.objectStore(STORE_NAME).delete("all_overrides");
      tx.objectStore("alts").delete("all_alt_overrides");
    } catch (e) {}
  });

  window.dispatchEvent(new Event("treatment_images_updated"));
}
