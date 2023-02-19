import React from "react";

import Router from "./routes";
import ScrollToTop from "./components/ScrollToTop";

//providers
import SnackbarProvider from "./providers/SnackbarProvider";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="w-screen h-screen">
      <SnackbarProvider>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Router />
        </AnimatePresence>
      </SnackbarProvider>
    </div>
  );
}

export default App;
