import { Button } from "@/components/ui/button";
import { Check, DollarSign, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$997",
      period: "/month",
      description: "For organizations looking to get started with AI & automations.",
      features: [
        "1 dedicated developer",
        "Custom workflow automations", 
        "AI business consulting",
        "Chatbot & LLM development",
        "Voice Assistant development",
        "Cancel & pause anytime"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$3997", 
      period: "/month",
      description: "For organizations looking to unlock the full power of AI & automations.",
      features: [
        "2 dedicated developers",
        "Custom workflow automations",
        "AI business consulting", 
        "Chatbot & LLM development",
        "Voice Assistant development",
        "Cancel & pause anytime"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month", 
      description: "For large organizations requiring advanced AI-solutions.",
      features: [
        "X dedicated developers",
        "Custom workflow automations",
        "AI business consulting",
        "Chatbot & LLM development", 
        "Voice Assistant development",
        "Cancel & pause anytime"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffb86b]/20 via-[#ff6a3d]/20 to-[#ffb86b]/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow">
            <DollarSign className="h-4 w-4" />
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Pricing</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Three flexible plans designed to fit your needs. Whether you're just starting with AI & automations, or scaling advanced solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 border rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-glow scale-105'
                  : 'border-white/10'
              } flex flex-col gap-6`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#ffb86b] via-[#ff6a3d] to-[#ffb86b] bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                <p className="text-white/70 mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full mb-8 group"
                onClick={scrollToContact}
              >
                Book a call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;