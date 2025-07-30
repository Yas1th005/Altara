import { MessageSquare, Mic, Workflow, Brain, BarChart3, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";

// Video component with hover functionality
const VideoThumbnail = ({ videoSrc, alt }: { videoSrc: string; alt: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const reverseIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      // Clear any existing reverse interval
      if (reverseIntervalRef.current) {
        clearInterval(reverseIntervalRef.current);
        reverseIntervalRef.current = null;
      }
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      
      // Play in reverse by decrementing currentTime
      let time = currentTime;
      reverseIntervalRef.current = setInterval(() => {
        if (videoRef.current && time > 0) {
          time -= 0.1; // Decrement by 0.1 seconds
          videoRef.current.currentTime = Math.max(0, time);
        } else {
          if (reverseIntervalRef.current) {
            clearInterval(reverseIntervalRef.current);
            reverseIntervalRef.current = null;
          }
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
          setIsHovered(false);
        }
      }, 50); // Update every 50ms for smooth reverse playback
    }
  };

  return (
    <div 
      className="bg-gradient-card border border-border/50 rounded-lg p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-lg">
        <video
          ref={videoRef}
          src={videoSrc}
          className={`w-full h-auto rounded-lg object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          preload="metadata"
        />
        <video 
          ref={thumbnailRef}
          src={videoSrc}
          className={`w-full h-auto rounded-lg object-cover absolute inset-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => {
            if (thumbnailRef.current) {
              thumbnailRef.current.currentTime = 0;
            }
          }}
        />
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.",
      demo: (
        <VideoThumbnail 
          videoSrc="/assets/1.mp4"
          alt="Chatbot Development"
        />
      )
    },
    {
      icon: Mic,
      title: "Voice Assistants",
      description: "We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-4">
          <img 
            src="/assets/2.png" 
            alt="Voice Assistants" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )
    },
    {
      icon: Workflow,
      title: "Workflow Automations",
      description: "We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-4">
          <img 
            src="/assets/3.png" 
            alt="Workflow Automations" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )
    },
    {
      icon: Brain,
      title: "AI Consulting",
      description: "We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.",
      demo: (
        <div className="bg-gradient-card border border-border/50 rounded-lg p-4">
          <img 
            src="/assets/4.png" 
            alt="AI Consulting" 
            className="w-full h-auto rounded-lg object-cover"
          />
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