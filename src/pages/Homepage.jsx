// src/pages/Homepage.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Projects from "../components/Projects";
import AnimatedText from "../components/AnimatedText";
import CallToAction from "../components/CallToAction";

function Homepage() {
  return (
    <main className="bg-white dark:bg-[#141414]">
      <Header />
      <Hero />
      <Services />
      <Projects />
      {/* <Faqs /> */}
      <Testimonial />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default Homepage;
