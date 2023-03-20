import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "/src/components/app/App";
import { ThemeProvider } from "styled-components";
import { theme } from "/src/components/theme/theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
