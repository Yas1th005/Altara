import AboutUsSection from "./lib/industry";

function Industry() {
  return <div id="industries"><AboutUsSection/></div>;
};

export default Industry;









// "use client";

// import DatabaseWithRestApi from "./lib/rest_api";

// export default function Industries() {
//   return (
//     // <div className="p-4 rounded-xl bg-accent/20 w-full">
//     //   <DatabaseWithRestApi />
//     // </div>

//     <section id="industries" className="py-24 relative bg-black flex justify-center items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      // <div className="text-center mb-16">
      //   <button 
      //   // variant="outline" 
      //   className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
      //   >
      //   Industries
      //   </button>
      //   <h2 className="text-4xl md:text-7xl font-medium mb-6 text-white tracking-tight">Industries we work with</h2>
      //   <p className="text-xl md:text-sm text-white/80 mb-12 max-w-2xl mx-auto font-normal ">
      //   Hear the success stories of the businesses we’ve helped thrive with AI. We work with a variety of different industries.
      //   </p>
      // </div>
//       <DatabaseWithRestApi />
//       </div>
//     </section>
//   );
// };








// import { 
//   ShoppingCart, 
//   Building, 
//   Scale, 
//   DollarSign, 
//   Heart,
//   Bot,
//   Mic,
//   Zap,
//   MessageSquare
// } from "lucide-react";

// const Industries = () => {
//   const industries = [
//     {
//       icon: ShoppingCart,
//       title: "E-commerce",
//       description: "We develop AI-powered customer support chatbots that provide instant helpful support, recommend products, and handle returns.",
//       example: "How can I assist you?",
//       features: ["Tell me, how can I help you?"]
//     },
//     {
//       icon: Building,
//       title: "Real Estate",
//       description: "We develop advanced voice-based AI assistants that seamlessly handle inbound customer calls and provide personalised support, 24/7.",
//       example: "Voice assistants",
//       features: ["24/7 customer support", "Lead qualification", "Property inquiries"]
//     },
//     {
//       icon: Scale,
//       title: "Legal",
//       description: "We automate document processing, client intake, and case management to improve efficiency and reduce costs.",
//       example: "Automations",
//       features: ["Document automation", "Client intake", "Case tracking"]
//     },
//     {
//       icon: DollarSign,
//       title: "Finance",
//       description: "We implement AI solutions for fraud detection, risk assessment, and automated financial reporting.",
//       example: "Chatbots",
//       features: ["Fraud detection", "Risk analysis", "Automated reporting"]
//     },
//     {
//       icon: Heart,
//       title: "Healthcare",
//       description: "We create AI assistants for patient scheduling, symptom checking, and healthcare workflow optimization.",
//       example: "Voice assistants",
//       features: ["Patient scheduling", "Symptom checking", "Workflow optimization"]
//     }
//   ];

//   const getServiceIcon = (example: string) => {
//     switch (example) {
//       case "Chatbots":
//         return Bot;
//       case "Voice assistants":
//         return Mic;
//       case "Automations":
//         return Zap;
//       default:
//         return MessageSquare;
//     }
//   };

//   return (
    // <section id="industries" className="py-24 relative bg-black">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    //   <div className="text-center mb-16">
    //         <button 
    //         // variant="outline" 
    //         className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
    //         >
    //         Industries
    //         </button>
    //       <h2 className="text-4xl md:text-7xl font-medium mb-6 text-white tracking-tight">Industries we work with</h2>
    //       <p className="text-xl md:text-sm text-white/80 mb-12 max-w-2xl mx-auto font-normal ">
    //       Hear the success stories of the businesses we’ve helped thrive with AI. We work with a variety of different industries.
    //       </p>
    //     </div>
    //     <div className="grid md:grid-cols-3 gap-10">
    //       {industries.slice(0, 3).map((industry) => {
    //         const ServiceIcon = getServiceIcon(industry.example);
    //         return (
    //           <div
    //             key={industry.title}
    //             className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 border border-white/10 rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 group flex flex-col gap-6"
    //           >
    //             <div className="flex items-center gap-4 mb-6">
    //               <div className="w-14 h-14 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-xl flex items-center justify-center group-hover:bg-primary/40 transition-colors">
    //                 <industry.icon className="h-7 w-7 text-primary" />
    //               </div>
    //               <h3 className="text-2xl font-semibold text-white">{industry.title}</h3>
    //             </div>
    //             <p className="text-white/70 mb-4 leading-relaxed">
    //               {industry.description}
    //             </p>
    //             <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3">
    //               <ServiceIcon className="h-5 w-5 text-primary" />
    //               <span className="font-medium text-white/90">{industry.example}</span>
    //               <span className="text-sm text-white/60 ml-2">{industry.features[0]}</span>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
//   );
// };

// export default Industries;