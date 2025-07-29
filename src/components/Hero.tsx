import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 bg-transparent">
      {/* Reduced intensity orange radial gradient overlay for Hero */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 80% 40%, #ff6a3d99 0%, #18181b 60%, #18181b 100%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-semibold mb-8 leading-[1.1] tracking-tight text-white">
            We elevate your business<br />
            using <span className="bg-gradient-to-r from-[#ffb86b] via-[#ff6a3d] to-[#ffb86b] bg-clip-text text-transparent">Artificial Intelligence.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
            We elevate and grow organizations using top-tier Artificial Intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="min-w-[140px] border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Our services
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group min-w-[140px] bg-gradient-to-r from-[#ffb86b] via-[#ff6a3d] to-[#ffb86b] text-black font-semibold hover:from-[#ff6a3d] hover:to-[#ffb86b] shadow-lg"
            >
              Book a call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
            </Button>
          </div>
          {/* Client logos */}
          <div className="space-y-6">
            <p className="text-white/60 text-sm font-light">You're in good company</p>
            <div className="flex items-center justify-center space-x-12 opacity-40">
              <div className="text-2xl font-light tracking-wider">goipsum</div>
              <div className="text-2xl font-bold tracking-wide">IPSUM</div>
              <div className="text-2xl font-light tracking-wider">LOGO</div>
              <div className="text-2xl font-light">⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;