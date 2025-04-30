// src/pages/Homepage.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Projects from "../components/Projects";

function Homepage() {
  return (
    <main className="">
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
