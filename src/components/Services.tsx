import { MessageSquare, Mic, Workflow, Brain, BarChart3, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
              U
            </div>
            <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
              <p className="text-sm">Please create a graph of the profits in this file</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">
              AI
            </div>
            <div className="bg-primary/20 rounded-lg p-3 max-w-xs">
              <p className="text-sm">Of course! Here's a graph based on the profits in the file you provided.</p>
              <div className="mt-2 h-16 bg-primary/10 rounded border border-primary/30 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Mic,
      title: "Voice Assistants",
      description: "We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center">
          <div className="relative mb-4">
            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
              <Mic className="h-10 w-10 text-primary animate-pulse" />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          </div>
          <p className="text-sm text-muted-foreground">Voice Assistant</p>
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Workflow,
      title: "Workflow Automations",
      description: "We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-4 space-y-4">
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center">1</div>
            <span className="text-sm">New Framer form submission</span>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-6 bg-border"></div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center">2</div>
            <span className="text-sm">Format & clean lead data in Zapier</span>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-6 bg-border"></div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="w-6 h-6 bg-purple-500 rounded text-white text-xs flex items-center justify-center">3</div>
            <span className="text-sm">Add lead to Airtable database</span>
          </div>
          <div className="text-center text-sm text-primary font-medium">
            Workflow successfully automated!
          </div>
        </div>
      )
    },
    {
      icon: Brain,
      title: "AI Consulting",
      description: "We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-4">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
              <div key={month} className="text-center">
                <div className="text-xs text-muted-foreground mb-1">{month}</div>
                <div
                  className="bg-primary/20 rounded"
                  style={{ height: `${Math.random() * 40 + 10}px` }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">+46%</div>
              <div className="text-xs text-muted-foreground">Efficiency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">-11%</div>
              <div className="text-xs text-muted-foreground">Cost</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-16">
            <button 
            // variant="outline" 
            className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
            >
            Services
            </button>
          <h2 className="text-4xl md:text-7xl font-medium mb-6 text-white tracking-tight">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2">
 {services.map((service, index) => (
   <div
     key={service.title}
     className={`bg-transparent border border-white/10 p-10 hover:shadow-2xl transition-all duration-300 group flex flex-col gap-6 ${
       index % 2 === 1 ? 'md:border-r-0' : 'md:border-l-0'
     }`}
   >
     <div className="flex items-start gap-6">
       {/* <div className="flex-shrink-0"> */}
         {/* <div className="w-14 h-14 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-xl flex items-center justify-center group-hover:bg-primary/40 transition-colors">
           <service.icon className="h-7 w-7 text-primary" />
         </div> */}
       {/* </div> */}
       <div className="flex-1">
         <h3 className="text-4xl font-medium mb-2 text-white">{service.title}</h3>
         <p className="text-white/70 mb-4 leading-relaxed">{service.description}</p>
       </div>
     </div>
     <div className="mt-2">
       {service.demo}
     </div>
   </div>
 ))}
</div>
      </div>
    </section>
  );
};

export default Services;