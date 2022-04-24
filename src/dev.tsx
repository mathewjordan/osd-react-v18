import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./index";

const Wrapper = () => {
  return <App />;
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
);
