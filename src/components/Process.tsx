"use client";
import React from "react";
import { StickyScroll } from "./lib/sticky";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-gradient-card border border-border/50 rounded-lg p-4 flex items-center justify-center text-white">
        <img
          src="./assets/p2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full bg-gradient-card border border-border/50 rounded-lg p-4 flex items-center justify-center text-white">
        <img
          src="./assets/p1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-gradient-card border border-border/50 rounded-lg p-4 flex items-center justify-center text-white">
        <img
          src="./assets/p3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Process() {
  return (
    <div id="process" className="h-[100vh]">
      <StickyScroll content={content} />
    </div>
  );
}











// import { Search, Code, Wrench, Settings } from "lucide-react";

// const Process = () => {
//   const steps = [
//     {
//       icon: Search,
//       title: "Workflow Analysis",
//       description: "We start by analyzing your workflows to identify tasks AI can automate and optimize."
//     },
//     {
//       icon: Code,
//       title: "AI Development",
//       description: "Next, we develop and integrate AI solutions into your workflows."
//     },
//     {
//       icon: Wrench,
//       title: "Implementation",
//       description: "We seamlessly integrate the solutions into your existing systems."
//     },
//     {
//       icon: Settings,
//       title: "Optimization",
//       description: "Then, we continuously refine and improve your AI solutions."
//     }
//   ];

//   const integrations = [
//     { name: "Airtable", color: "bg-yellow-500" },
//     { name: "Notion", color: "bg-gray-500" },
//     { name: "Zapier", color: "bg-orange-500" },
//     { name: "OpenAI", color: "bg-green-500" },
//     { name: "Facebook", color: "bg-blue-500" }
//   ];

//   return (
//     <section id="process" className="py-24 relative bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      // <div className="text-left mb-16">
      //       <button 
      //       // variant="outline" 
      //       className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
      //       >
      //       Process
      //       </button>
      //     <h2 className="text-4xl md:text-7xl font-medium mb-6 text-white tracking-tight">Our Process</h2>
      //   </div>
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left side - Process steps */}
//           <div className="space-y-10">
//             {steps.map((step, index) => (
//               <div key={step.title} className="flex items-start gap-6 group relative">
//                 <div className="flex-shrink-0">
//                   <div className="w-14 h-14 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-xl flex items-center justify-center group-hover:bg-primary/40 transition-colors">
//                     <step.icon className="h-7 w-7 text-primary" />
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
//                   <p className="text-white/70 leading-relaxed">{step.description}</p>
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div className="absolute left-7 top-16 w-px h-10 bg-gradient-to-b from-primary/30 to-transparent"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//           {/* Right side - Integration diagram */}
//           <div className="relative">
//             <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 border border-white/10 rounded-2xl p-10 shadow-xl">
//               <div className="text-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-xl mx-auto flex items-center justify-center mb-4">
//                   <Code className="h-8 w-8 text-primary" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">Your business</h3>
//               </div>
//               <div className="space-y-4">
//                 {integrations.map((integration, index) => (
//                   <div key={integration.name} className={`flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors shadow-sm`}>
//                     <div className={`w-8 h-8 ${integration.color} rounded flex items-center justify-center text-white text-sm font-bold`}>
//                       {integration.name.charAt(0)}
//                     </div>
//                     <span className="font-medium text-white/90">{integration.name}</span>
//                     <div className="ml-auto flex space-x-1">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;