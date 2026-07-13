import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Register service worker for offline support
import { registerSW } from "virtual:pwa-register";

// Initialize Web Vitals tracking
import { initWebVitals } from "./app/utils/webVitals";

const updateSW = registerSW({
  onNeedRefresh() {
    // Show a prompt to the user asking if they want to reload
    if (confirm("New content available. Reload to update?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App ready to work offline");
  },
});

// Start tracking Core Web Vitals
initWebVitals();

createRoot(document.getElementById("root")!).render(<App />);
