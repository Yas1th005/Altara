import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Subtle, site-wide background gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{background: 'radial-gradient(ellipse at 80% 40%, #ff6a3d11 0%, #18181b 80%, #18181b 100%)'}} />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Industries />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
