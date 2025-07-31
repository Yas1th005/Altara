import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
// import Footer from "@/components/Footer";
import FooterDemo from "@/components/Footer";
import { HeroScrollDemo } from "@/components/Calculator";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scrollbar-hide">
      {/* Subtle, site-wide background gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-black scrollbar-hide" />
      <Navigation />
      {/* <Hero /> */}
      <HeroScrollDemo/>
      <About />
      <Services />
      <Process />
      <Industries />
      {/* <Pricing /> */}
      <Testimonials />
      {/* <Team /> */}
      <Contact />
      <FAQ />
      <FooterDemo />
    </div>
  );
};

export default Index;
