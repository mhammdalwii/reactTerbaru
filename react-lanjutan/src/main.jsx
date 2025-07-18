import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const container = document.getElementById("root");
const root = createRoot(container, {
  identifierPrefix: "react-lanjutan",
});
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
