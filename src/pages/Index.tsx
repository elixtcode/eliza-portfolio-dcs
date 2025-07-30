import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <Mission />
        <Projects />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
