import { hydrateRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App";

hydrateRoot(
  document,
  <StrictMode>
    <App />
  </StrictMode>
);
