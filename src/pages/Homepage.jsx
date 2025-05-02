// src/pages/Homepage.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Projects from "../components/Projects";
import AnimatedText from "../components/AnimatedText";

function Homepage() {
  return (
    <main className="flex flex-col w-full justify-between items-center">
      <Header />
      <Hero />
      <Services />
      <Projects />
      {/* <Faqs /> */}
      <Testimonial />
      <Footer />
    </main>
  );
}

export default Homepage;
