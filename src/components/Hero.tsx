import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Infinite from "./lib/Infinite";
import { StarBorderDemo } from "./lib/MainButton";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-fit flex items-center justify-center relative overflow-hidden pt-40 bg-black">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Warm orange/red gradient glow on the right side */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{
             background: 'radial-gradient(ellipse at 85% 35%, rgba(255, 106, 61, 0.4) 0%, rgba(255, 184, 107, 0.2) 30%, rgba(255, 106, 61, 0.1) 60%, transparent 80%)'
           }} />
      
      {/* Subtle particles/dots scattered across background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-8 font-medium leading-[1.3] tracking-tight text-white">
          <span className="block mb-4">We elevate your <span className="bg-gradient-to-r from-white from-60% to-[#ff6a3d] bg-clip-text text-transparent">business</span></span>
          <span className="block">using <span className="bg-gradient-to-r from-white from-60% to-[#ff6a3d] bg-clip-text text-transparent">Artificial Intelligence.</span></span>
        </h1>
          <p className="text-xl md:text-sm text-white/80 mb-12 max-w-xl mx-auto font-medium">
            We elevate and grow organizations using top-tier Artificial Intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            {/* <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="min-w-[140px] border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Our services
            </Button> */}
            <StarBorderDemo/>
            {/* <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group min-w-[140px] bg-gradient-to-r from-[#ffb86b] via-[#ff6a3d] to-[#ffb86b] text-black font-semibold hover:from-[#ff6a3d] hover:to-[#ffb86b] shadow-lg"
            >
              Book a call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
            </Button> */}
            <StarBorderDemo/>
          </div>
          {/* Client logos */}
          {/* <div className="space-y-6">
            <p className="text-white/60 text-sm font-light">You're in good company</p>
            <div className="flex items-center justify-center space-x-12 opacity-40">
              <Infinite/>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;