import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { App } from "./App";
import { Toaster } from "./shared/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster closeButton richColors />
  </StrictMode>
);
