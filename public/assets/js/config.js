<!-- File: public/assets/js/config.js -->
(() => {
  // LedgerHaul Static Site runtime config
  // Set via Render "Environment Variables" on the STATIC SITE (not the API).
  // Fallback stays on production API if env not injected.
  const DEFAULT_API_BASE = "https://api.ledgerhaul.com";

  function readMeta(name) {
    const el = document.querySelector(`meta[name="${name}"]`);
    return el && el.content ? el.content.trim() : "";
  }

  // 1) Prefer Render-injected global (if you add it later)
  // 2) Then meta tag
  // 3) Then production default
  const injected =
    (window.__LEDGERHAUL__ && window.__LEDGERHAUL__.API_BASE_URL) ||
    readMeta("ledgerhaul-api-base") ||
    "";

  const API_BASE_URL = (injected || DEFAULT_API_BASE).replace(/\/+$/, "");

  // Expose one canonical config object
  window.LH_CONFIG = Object.freeze({
    APP_NAME: "LedgerHaul",
    API_BASE_URL
  });

  // Optional: quick sanity check (does not break page)
  // console.log("LH_CONFIG", window.LH_CONFIG);
})();
</script>
