import React from "react";
import Scroll from "./utilities/Scroll/Scroll";
import Destinations from "./components/Destinations/Destinations";
import About from "./components/About/About";
import Services from "./components/Services/Services";

import Cta from "./components/Cta/Cta";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Scroll />
      <Destinations secId="section2" />
      <About secId="section3" />
      <Services secId="section4" />
      <Testimonials secId="section5" />
      <Cta secId="section6" />
      <Footer />
    </div>
  );
}

export default App;
