import { TestimonialsSection } from "./lib/testimonial"


const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="Trusted by developers worldwide"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
  )
}













// import { Star, Quote, User } from "lucide-react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       quote: "Our AI-driven voice assistant developed by Auralis now handles all incoming customer support queries instantly, 24/7.",
//       author: "James Harrington",
//       role: "CEO - LogoIpsum",
//       avatar: "JH"
//     },
//     {
//       quote: "Auralis automated a large part of our workflows, resulting in a significant increase in productivity and a huge decrease in cost.",
//       author: "Emma Castillo", 
//       role: "Founder - LogoIpsum",
//       avatar: "EC"
//     },
//     {
//       quote: "Auralis' AI consulting streamlined our operations and reduced costs by 30%. Would highly recommend their consulting services!",
//       author: "Liam Bennett",
//       role: "CTO - LogoIpsum", 
//       avatar: "LB"
//     },
//     {
//       quote: "Partnering with Auralis for the development of our customer service chatbot was the best decision we could've made!",
//       author: "Sophia Reynolds",
//       role: "Co-founder - LogoIpsum",
//       avatar: "SR"
//     }
//   ];

//   return (
//     <section id="testimonials" className="py-24 relative bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      // <div className="text-center mb-16">
      //       <button 
      //       // variant="outline" 
      //       className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
      //       >
      //       Reviews
      //       </button>
      //     <h2 className="text-4xl md:text-7xl font-medium mb-6 text-white tracking-tight">Here's what our clients say</h2>
      //     <p className="text-xl md:text-base text-white/80 mb-12 max-w-2xl mx-auto font-normal ">
      //     Hear the success stories of the businesses we’ve helped thrive with AI.
      //     </p>
      //   </div>
//         <div className="grid md:grid-cols-2 gap-10">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 border border-white/10 rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 flex flex-col gap-6"
//             >
//               {/* Stars */}
//               <div className="flex gap-1 mb-6">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 fill-primary text-primary" />
//                 ))}
//               </div>
//               {/* Quote */}
//               <blockquote className="text-lg text-white/90 mb-6 leading-relaxed">
//                 "{testimonial.quote}"
//               </blockquote>
//               {/* Author */}
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-full flex items-center justify-center">
//                   <span className="text-primary font-semibold text-lg">{testimonial.avatar}</span>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">{testimonial.author}</div>
//                   <div className="text-sm text-white/60">{testimonial.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;