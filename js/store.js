(() => {
"use strict";

/*
 * v20.75 儲存層
 *
 * 核心規則：
 * 1. 每個版本使用獨立儲存命名空間。
 * 2. 每次更新後第一次啟動時，清除所有舊版本殘留。
 * 3. 沒有任何有效遊戲進度時，收藏必須是空白。
 * 4. 自動存檔永遠不會出現在 SAVE 01～10。
 * 5. 手動存檔只有玩家實際按下 SAVE 才會建立。
 */

const SAVE_SCHEMA = 270;
const COLLECTION_SCHEMA = 230;
const BUILD_ID = "volume13-v20-75";
const GAME_STORAGE_PREFIX = "volume13-v";

const KEYS = {
  initialized: `${BUILD_ID}-initialized`,
  auto: `${BUILD_ID}-auto`,
  settings: `${BUILD_ID}-settings`,
  collection: `${BUILD_ID}-collection`,
  quick: `${BUILD_ID}-quick`,
  slot: index => `${BUILD_ID}-slot-${index}`
};

const emptyCollection = () => ({
  schemaVersion: COLLECTION_SCHEMA,
  characters: [],
  items: [],
  information: [],
  endings: [],
  newEntries: []
});

function cleanStringArray(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(
    value
      .filter(item => typeof item === "string" && item.trim())
      .map(item => item.trim())
  )];
}

function parse(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function validProgress(value) {
  return Boolean(
    value &&
    typeof value === "object" &&
    value.saveSchema === SAVE_SCHEMA &&
    value.hasStarted === true
  );
}

function validManualSave(value) {
  return validProgress(value) && value.manualSaved === true;
}

function validQuickSave(value) {
  return validProgress(value) && value.quickSaved === true;
}

function clearProgressKeys() {
  localStorage.removeItem(KEYS.auto);
  localStorage.removeItem(KEYS.quick);
  localStorage.removeItem(KEYS.collection);
  for (let i = 1; i <= 10; i++) {
    localStorage.removeItem(KEYS.slot(i));
  }
}

/*
 * 保證下載新版本後第一次打開一定乾淨。
 * 只執行一次；重新整理不會再次刪除玩家在本版本建立的進度。
 */
if (localStorage.getItem(KEYS.initialized) !== "1") {
  // 自動清除本遊戲所有舊版本資料，未來不需要再逐版補名單。
  // 僅處理 volume13-v 開頭的鍵，不碰其他網站或其他遊戲。
  const obsoleteKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(GAME_STORAGE_PREFIX)) {
      obsoleteKeys.push(key);
    }
  }
  obsoleteKeys.forEach(key => localStorage.removeItem(key));

  localStorage.setItem(KEYS.initialized, "1");
}

function hasAnyValidProgress() {
  if (validProgress(parse(KEYS.auto))) return true;
  if (validQuickSave(parse(KEYS.quick))) return true;

  for (let i = 1; i <= 10; i++) {
    if (validManualSave(parse(KEYS.slot(i)))) return true;
  }
  return false;
}

const api = {
  loadJSON(key, fallback) {
    return parse(key, fallback);
  },

  saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  loadAuto() {
    const value = parse(KEYS.auto);
    return validProgress(value) ? value : null;
  },

  saveAuto(state) {
    if (!state || state.hasStarted !== true) return;
    localStorage.setItem(
      KEYS.auto,
      JSON.stringify({...state, saveSchema: SAVE_SCHEMA})
    );
  },

  loadSettings() {
    return Object.assign(
      {
        textSpeed: 56,
        fontSize: 22,
        uiOpacity: 92,
        motion: true,
        autoDelay: 1100
      },
      parse(KEYS.settings, {})
    );
  },

  saveSettings(settings) {
    localStorage.setItem(KEYS.settings, JSON.stringify(settings || {}));
  },

  loadCollection() {
    /*
     * 尚未開始過遊戲、沒有快速存檔、也沒有手動存檔時，
     * 即使瀏覽器裡殘留任何收藏 JSON，也一律回傳空白收藏。
     */
    if (!hasAnyValidProgress()) {
      localStorage.removeItem(KEYS.collection);
      return emptyCollection();
    }

    const raw = parse(KEYS.collection);
    if (!raw || raw.schemaVersion !== COLLECTION_SCHEMA) {
      return emptyCollection();
    }

    return {
      schemaVersion: COLLECTION_SCHEMA,
      characters: cleanStringArray(raw.characters),
      items: cleanStringArray(raw.items),
      information: cleanStringArray(raw.information),
      endings: cleanStringArray(raw.endings),
      newEntries: cleanStringArray(raw.newEntries)
    };
  },

  saveCollection(collection) {
    /*
     * 未開始遊戲時，禁止寫入任何人物、道具、情報或結局。
     */
    if (!hasAnyValidProgress()) {
      localStorage.removeItem(KEYS.collection);
      return;
    }

    const safe = emptyCollection();
    if (collection && typeof collection === "object") {
      safe.characters = cleanStringArray(collection.characters);
      safe.items = cleanStringArray(collection.items);
      safe.information = cleanStringArray(collection.information);
      safe.endings = cleanStringArray(collection.endings);
      safe.newEntries = cleanStringArray(collection.newEntries);
    }

    localStorage.setItem(KEYS.collection, JSON.stringify(safe));
  },

  loadSlot(index) {
    const value = parse(KEYS.slot(index));
    return validManualSave(value) ? value : null;
  },

  saveSlot(index, state) {
    if (!state || state.hasStarted !== true) return;
    localStorage.setItem(
      KEYS.slot(index),
      JSON.stringify({
        ...state,
        saveSchema: SAVE_SCHEMA,
        manualSaved: true,
        savedAt: Date.now()
      })
    );
  },

  loadQuick() {
    const value = parse(KEYS.quick);
    return validQuickSave(value) ? value : null;
  },

  saveQuick(state) {
    if (!state || state.hasStarted !== true) return;
    localStorage.setItem(
      KEYS.quick,
      JSON.stringify({
        ...state,
        saveSchema: SAVE_SCHEMA,
        quickSaved: true,
        savedAt: Date.now()
      })
    );
  },

  debugSnapshot() {
    return {
      hasProgress: hasAnyValidProgress(),
      auto: this.loadAuto(),
      quick: this.loadQuick(),
      slots: Array.from({length:10}, (_,i) => this.loadSlot(i + 1)),
      collection: this.loadCollection()
    };
  }
};

window.VNStore = api;
})();
