import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import App from "./App.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/sonner.tsx";





createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster position="top-right" richColors  />
  </>
);
