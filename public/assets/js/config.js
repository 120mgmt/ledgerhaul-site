/* File: public/assets/js/config.js */
(() => {
  "use strict";

  // LedgerHaul Static Site runtime config
  // Priority:
  // 1) window.__LEDGERHAUL__.API_BASE_URL (if injected)
  // 2) <meta name="ledgerhaul-api-base" content="...">
  // 3) DEFAULT_API_BASE
  const DEFAULT_API_BASE = "https://api.ledgerhaul.com";

  function readMeta(name) {
    const el = document.querySelector(`meta[name="${name}"]`);
    return el && el.content ? String(el.content).trim() : "";
  }

  const injected =
    (window.__LEDGERHAUL__ &&
      typeof window.__LEDGERHAUL__ === "object" &&
      window.__LEDGERHAUL__.API_BASE_URL) ||
    readMeta("ledgerhaul-api-base") ||
    "";

  const raw = String(injected || DEFAULT_API_BASE).trim();

  // Normalize trailing slashes
  const API_BASE_URL = raw.replace(/\/+$/, "");

  // Expose one canonical config object
  window.LH_CONFIG = Object.freeze({
    APP_NAME: "LedgerHaul",
    API_BASE_URL
  });
})();
