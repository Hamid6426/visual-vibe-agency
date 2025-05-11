// src/pages/Homepage.jsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";

function Homepage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <Testimonial />
      <CallToAction />
    </main>
  );
}

export default Homepage;
