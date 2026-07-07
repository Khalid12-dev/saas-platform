import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Stats from "./components/Stats";
import CursorGlow from "./components/CursorGlow";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
<CursorGlow/>
      <ScrollProgress />

      <Navbar />

      <Hero />
      <Stats />
      <Companies />

      <Features />

      <Pricing />

      <Comparison />

      <Testimonials />

      <FAQ />

      <Blog />

      <Contact />

      <Footer />

    </>
  );
}

export default App;