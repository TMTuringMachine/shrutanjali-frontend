import React from "react";

import Router from "./routes";
import ScrollToTop from "./components/ScrollToTop";

//providers
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <div className="w-screen h-screen">
      <SnackbarProvider>
        <ScrollToTop />
        <Router />
      </SnackbarProvider>
    </div>
  );
}

export default App;
