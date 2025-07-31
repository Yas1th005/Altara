import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, SendHorizonal } from "lucide-react";
import Infinite from "./lib/Infinite";
import { StarBorderDemo } from "./lib/MainButton";
import { useState } from "react";
import { sendBrochureRequest } from "../lib/email";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBrochureRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await sendBrochureRequest(email);
      alert('Thank you! We will send you the brochure shortly.');
      setEmail("");
    } catch (error) {
      console.error('Error sending brochure request:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-fit flex items-center justify-center relative overflow-hidden pt-60 bg-black">
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
        <h1 className="text-5xl md:text-7xl mb-8 font-medium leading-[1.2] tracking-tight text-white mt-5">
          <span className="block mb-4">We elevate your <span className="bg-gradient-to-r from-white from-60% to-[#ff6a3d] bg-clip-text text-transparent">business</span></span>
          <span className="block">using <span className="bg-gradient-to-r from-white from-60% to-[#ff6a3d] bg-clip-text text-transparent">Artificial Intelligence.</span></span>
        </h1>
          <p className="text-xl md:text-sm text-white/80 mb-12 max-w-xl mx-auto font-medium">
            We elevate and grow organizations using top-tier Artificial Intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            {/* <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="min-w-[140px] border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Our services
            </Button> */}
            {/* <StarBorderDemo/> */}
            {/* <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group min-w-[140px] bg-gradient-to-r from-[#ffb86b] via-[#ff6a3d] to-[#ffb86b] text-black font-semibold hover:from-[#ff6a3d] hover:to-[#ffb86b] shadow-lg"
            >
              Book a call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform ml-2" />
            </Button> */}
            {/* <StarBorderDemo/> */}
            <form
  onSubmit={handleBrochureRequest}
  className="mx-auto mt-10 max-w-sm lg:mt-0">
  <div className="relative inline-block py-[1px] overflow-hidden rounded-lg">
    {/* Glow border animation */}
    <div
      className="absolute inset-0 rounded-lg animate-pulse bg-gradient-to-r from-transparent via-[#774c2e] to-transparent"
      style={{
        animationDuration: "6s",
        boxShadow: "0 0 20px #774c2e, 0 0 40px #774c2e, 0 0 60px #774c2e",
      }}
    />
    
    {/* Animated glow elements */}
    <div
      className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 opacity-60"
      style={{
        background: "radial-gradient(circle, #774c2e, transparent 10%)",
        animationDuration: "6s",
      }}
    />
    <div
      className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 opacity-60"
      style={{
        background: "radial-gradient(circle, #774c2e, transparent 10%)",
        animationDuration: "6s",
      }}
    />
    
    {/* Main input container with black background */}
    <div className="relative z-10 border text-white rounded-lg bg-black border-[#774c2e]/40 backdrop-blur-sm hover:border-[#774c2e]/60 transition-all duration-300">
      <div className="relative grid grid-cols-[1fr_auto] items-center pr-3">
        <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />
        <input
          placeholder="Your mail address"
          className="h-14 w-full bg-transparent pl-12 focus:outline-none text-white placeholder:text-white/60"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <div className="md:pr-1.5 lg:pr-0">
          <button type="submit" disabled={isSubmitting} className="text-sm font-semibold bg-white/80 p-2 rounded-lg text-black">
            Get Brochure
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
          </div>
          {/* Client logos */}
          <div className="space-y-6">
            <p className="text-white/60 text-sm font-light">You're in good company</p>
            <div className="flex items-center justify-center space-x-12 opacity-40">
              <Infinite/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;