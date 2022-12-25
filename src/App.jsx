import React from "react";
import Destinations from "./components/Destinations/Destinations";
import Stats from "./components/Stats/Stats";

import Cta from "./components/Cta/Cta";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Destinations />
      <Stats />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
