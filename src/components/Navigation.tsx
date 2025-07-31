import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { StarBorderDemo } from "./lib/MainButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
    // { name: "Pricing", href: "#pricing" },
    // { name: "Team", href: "#team" },
    // { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl z-50 rounded-lg bg-black/10 backdrop-blur-lg shadow-lg p-2",
        isScrolled ? "scale-100" : "scale-100"
      )}
    >
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          {/* <Sparkles className="h-4 w-4 text-white" /> */}
          <img className="h-8 w-8 text-white" src="./logo.png"></img>
          <span className="text-base font-semibold text-white tracking-wide">ALTARA</span>
        </div>
        {/* Desktop Navigation */}
<div className="hidden md:flex items-center gap-10">
  {navItems.map((item) => (
    <button
      key={item.name}
      onClick={() => scrollToSection(item.href)}
      className="text-white text-sm font-medium hover:text-white/80 transition-colors duration-200 relative group"
    >
      {item.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#fc9850] to-white transition-all duration-500 group-hover:w-full"></span>
    </button>
  ))}
</div>
        {/* CTA Button */}
        <div className="hidden md:flex" onClick={() => scrollToSection("#contact")}>
          {/* <Button variant="cta" onClick={() => scrollToSection("#contact")} className="bg-black/70 border border-white/20 text-white hover:bg-white/10 px-6 rounded-lg shadow text-xs">
            Get template
          </Button> */}
          <StarBorderDemo text="Get in touch"/>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl bg-black/80 border border-white/10 shadow-lg py-4 flex flex-col gap-2 backdrop-blur-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-base font-medium hover:text-white/80 transition-colors duration-200 px-4 py-2 text-left"
              >
                {item.name}
              </button>
            ))}
            <Button 
              variant="cta" 
              className="w-full bg-black/70 border border-white/20 text-white hover:bg-white/10 px-6 py-2 rounded-lg font-semibold mt-2"
              onClick={() => scrollToSection("#contact")}
            >
              Get template
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;