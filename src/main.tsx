import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import disableDevtool from "disable-devtool";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30,
        } as any,
        mutations: {
            retry: 1,
        },
    },
});

// // Raw global scripts for deterring inspect/devtools (runs immediately, outside React render cycle)
// const disableInspect = () => {
//     // Disable right-click context menu (prevents "Inspect" from right-click)
//     document.addEventListener('contextmenu', (e) => e.preventDefault());
//
//     // Disable common keyboard shortcuts for opening DevTools or viewing source
//     document.addEventListener('keydown', (e) => {
//         if (
//             e.key === 'F12' ||
//             (e.ctrlKey && e.shiftKey && e.key === 'I') ||  // Ctrl+Shift+I (DevTools)
//             (e.ctrlKey && e.shiftKey && e.key === 'C') ||  // Ctrl+Shift+C (Inspect element)
//             (e.ctrlKey && e.shiftKey && e.key === 'J') ||  // Ctrl+Shift+J (Console)
//             (e.ctrlKey && e.key === 'U') ||                // Ctrl+U (View source)
//             (e.ctrlKey && e.key === 'S')                   // Ctrl+S (Save page, optional)
//         ) {
//             e.preventDefault();
//             // Optional: Alert or log (in production, you could trigger a custom toast via a global event)
//             console.warn('Developer tools access disabled for security reasons.');
//             // To integrate with Sonner: This is tricky outside React, but you can emit a custom event
//             // and listen in a React component. For simplicity, skip or handle in App.tsx if needed.
//         }
//     });
//
//     // Periodic detection of DevTools (based on window size differences when docked)
//     const devtoolsDetector = setInterval(() => {
//         const widthThreshold = 200;  // Typical DevTools width/height when open
//         const heightThreshold = 200;
//         if (
//             window.outerWidth - window.innerWidth > widthThreshold ||
//             window.outerHeight - window.innerHeight > heightThreshold
//         ) {
//             // DevTools likely open – take deterrent action
//             document.body.style.filter = 'blur(10px)';  // Blur the entire page content
//             document.body.style.pointerEvents = 'none'; // Disable interactions
//             // Alternative actions:
//             // - Redirect: window.location.href = '/inspection-disabled';
//             // - Clear content: document.body.innerHTML = '<h1 style="text-align: center; margin-top: 20%;">Inspection is disabled!</h1>';
//             // - Show overlay: Add a full-screen div (requires DOM manipulation)
//         } else {
//             // Reset if DevTools closed
//             document.body.style.filter = 'none';
//             document.body.style.pointerEvents = 'auto';
//         }
//     }, 1000);  // Check every second (adjust for performance)
//
//     // Optional: Clean up on page unload (though not critical for SPAs)
//     window.addEventListener('beforeunload', () => {
//         clearInterval(devtoolsDetector);
//     });
// };
//
// // Enable inspect deterrence only in production OR when VITE_APP_ENV is not 'dev' (custom env-based control)
// // This respects your .env setup: In dev (VITE_APP_ENV=dev), it's disabled; in staging/prod, enable if needed.
// // process.env.NODE_ENV is 'production' only in builds (npm run build); in dev server (npm run dev), it's 'development'.
// // VITE_ vars are injected by Vite at build/runtime (available as import.meta.env.VITE_APP_ENV).
// // Note: In Vite, access via import.meta.env (not process.env directly for VITE_ vars).
// // Fallback: If VITE_APP_ENV undefined, default to enabling only in NODE_ENV production.
// const shouldEnableDeterrence = () => {
//     const viteEnv = import.meta.env.VITE_APP_ENV;
//
//     // Disable in local dev (VITE_APP_ENV=dev OR nodeEnv=development)
//     if (viteEnv === 'dev') {
//         console.log('Inspect deterrence disabled in development mode');
//         return false;
//     }
//
//     // Enable in prod builds or non-dev custom envs (e.g., staging)
//     // Add more conditions if needed, e.g., based on VITE_APP_LIVE_TRANSACTION
//     return true;
// };
//
// if (shouldEnableDeterrence()) {
//     disableInspect();
// }

if (import.meta.env.VITE_APP_ENV !== "dev") {
    disableDevtool();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <Toaster
                  theme="system"
                  position="top-right"
                  richColors={true}
                  closeButton={true}
                  className="custom-toast"
              />
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </Provider>
      </QueryClientProvider>
  </StrictMode>
);
