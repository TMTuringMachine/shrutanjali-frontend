import React from "react";

import Router from "./routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="w-screen h-screen">
      <ScrollToTop />
      <Router />
    </div>
  );
}

export default App;
