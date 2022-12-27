import React from "react";
import Destinations from "./components/Destinations/Destinations";
import About from "./components/About/About";
import Services from "./components/Services/Services";

import Cta from "./components/Cta/Cta";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Destinations />
      <About />
      <Services />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
