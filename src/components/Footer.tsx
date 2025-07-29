import { Footer } from './lib/footer';

export default function FooterDemo() {
	return (
			<div className='bg-black'><Footer /></div>
	);
}










// import { Sparkles, Twitter, Linkedin, Github } from "lucide-react";

// const Footer = () => {
//   const footerLinks = {
//     company: [
//       { name: "About", href: "#about" },
//       { name: "Team", href: "#team" },
//       { name: "Careers", href: "#careers" },
//       { name: "Contact", href: "#contact" }
//     ],
//     services: [
//       { name: "Chatbot Development", href: "#services" },
//       { name: "Voice Assistants", href: "#services" },
//       { name: "Workflow Automation", href: "#services" },
//       { name: "AI Consulting", href: "#services" }
//     ],
//     resources: [
//       { name: "Documentation", href: "#docs" },
//       { name: "Blog", href: "#blog" },
//       { name: "Case Studies", href: "#cases" },
//       { name: "FAQ", href: "#faq" }
//     ]
//   };

//   const socialLinks = [
//     { icon: Twitter, href: "#", label: "Twitter" },
//     { icon: Linkedin, href: "#", label: "LinkedIn" },
//     { icon: Github, href: "#", label: "GitHub" }
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="border-t border-border/50 py-16 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* Brand section */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-2 mb-6">
//               <Sparkles className="h-8 w-8 text-primary animate-pulse" />
//               <span className="text-2xl font-bold text-gradient">Auralis</span>
//             </div>
//             <p className="text-white/70 mb-6 max-w-md leading-relaxed">
//               We craft cutting edge AI solutions to make organizations more effective and competitive. 
//               Elevating businesses through artificial intelligence.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors group"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links sections */}
//           <div>
//             <h3 className="font-semibold mb-4 text-white">Company</h3>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link) => (
//                 <li key={link.name}>
//                   <button
//                     onClick={() => scrollToSection(link.href)}
//                     className="text-white/70 hover:text-primary transition-colors"
//                   >
//                     {link.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4 text-white">Services</h3>
//             <ul className="space-y-3">
//               {footerLinks.services.map((link) => (
//                 <li key={link.name}>
//                   <button
//                     onClick={() => scrollToSection(link.href)}
//                     className="text-white/70 hover:text-primary transition-colors"
//                   >
//                     {link.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-4 text-white">Resources</h3>
//             <ul className="space-y-3">
//               {footerLinks.resources.map((link) => (
//                 <li key={link.name}>
//                   <button
//                     onClick={() => scrollToSection(link.href)}
//                     className="text-white/70 hover:text-primary transition-colors"
//                   >
//                     {link.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-white/60 text-sm">
//             © 2024 Auralis. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
//               Terms of Service
//             </a>
//             <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;