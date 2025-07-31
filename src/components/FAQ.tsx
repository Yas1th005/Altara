'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './lib/Accordian'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
// import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'What are your business hours?',
            answer: 'Our customer service team is available Monday through Friday from 9:00 AM to 8:00 PM EST, and weekends from 10:00 AM to 6:00 PM EST. During holidays, hours may vary and will be posted on our website.',
        },
        {
            id: 'item-2',
            icon: 'credit-card',
            question: 'How do subscription payments work?',
            answer: 'Subscription payments are automatically charged to your default payment method on the same day each month or year, depending on your billing cycle. You can update your payment information and view billing history in your account dashboard.',
        },
        {
            id: 'item-3',
            icon: 'truck',
            question: 'Can I expedite my shipping?',
            answer: 'Yes, we offer several expedited shipping options at checkout. Next-day and 2-day shipping are available for most U.S. addresses if orders are placed before 2:00 PM EST. International expedited shipping options vary by destination.',
        },
        {
            id: 'item-4',
            icon: 'globe',
            question: 'Do you offer localized support?',
            answer: 'We offer multilingual support in English, Spanish, French, German, and Japanese. Our support team can assist customers in these languages via email, chat, and phone during standard business hours for each respective region.',
        },
        {
            id: 'item-5',
            icon: 'package',
            question: 'How do I track my order?',
            answer: 'Once your order ships, you\'ll receive a confirmation email with a tracking number. You can use this number on our website or the carrier\'s website to track your package. You can also view order status and tracking information in your account dashboard under "Order History".',
        },
    ]

    return (
        <section id="faq" className="bg-black dark:bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Section - FAQ Introduction */}
                    <div className="space-y-6 lg:pr-8">
                        <button 
                        // variant="outline" 
                        className="border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
                        >
                        FAQ
                        </button>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight">
                        FAQ
                        </h2>
                        <p className="text-base text-white/60 leading-relaxed font-light max-w-lg">
                        We've gone ahead and answered the questions we're asked most often. Can't find what you're looking for? Feel free to reach out to us through the contact form above!
                        </p>
                    </div>
                    
                    {/* Right Section - Questions List */}
                    <div className="w-full">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-3">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-[#0f0f0f] rounded-[10px] px-4">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3 w-full">
                                            <div className="flex size-6 flex-shrink-0">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base text-white/70 font-medium text-left">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base text-white/30 font-light">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}











// import { Button } from "@/components/ui/button";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { ArrowUpRight } from "lucide-react";

// const FAQ = () => {
//   const faqData = [
//     {
//       question: "What makes Auralis unique?",
//       answer: "Auralis stands out through our comprehensive AI integration approach, combining cutting-edge technology with deep industry expertise. We don't just implement AI solutions—we transform your entire business workflow to maximize efficiency and ROI."
//     },
//     {
//       question: "Is my company a good fit for Auralis?",
//       answer: "We work with companies of all sizes, from startups to enterprise organizations. If you're looking to automate processes, improve customer experience, or gain competitive advantages through AI, we can help you achieve your goals."
//     },
//     {
//       question: "How does your subscription model work?",
//       answer: "Our flexible subscription model includes implementation, ongoing support, and continuous optimization. We offer tiered pricing based on your needs, with transparent costs and no hidden fees. Contact us for a custom quote."
//     },
//     {
//       question: "How long does the development phase take?",
//       answer: "Development timelines vary based on project complexity, typically ranging from 4-12 weeks. We provide detailed project timelines upfront and keep you updated throughout the process with regular check-ins and demos."
//     },
//     {
//       question: "Do you provide support after implementation?",
//       answer: "Yes, we provide comprehensive post-implementation support including training, troubleshooting, and ongoing optimization. Our team is always available to ensure your AI solutions continue to deliver maximum value."
//     }
//   ];

//   return (
//     <section id="faq" className="py-24 relative bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Section - FAQ Introduction */}
//           <div className="space-y-6">
//           <button 
//             // variant="outline" 
//             className="border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
//             >
//             FAQ
//             </button>
//             <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tight">
//               FAQ
//             </h2>
//             <p className="text-base text-white/60 leading-relaxed font-light">
//               We've gone ahead and answered the questions we're asked most often. Can't find what you're looking for? Feel free to reach out to us through the contact form above!
//             </p>
//           </div>

//           {/* Right Section - Questions List */}
//           <div className="space-y-4">
//             <Accordion type="single" collapsible className="space-y-4">
//               {faqData.map((item, index) => (
//                 <AccordionItem 
//                   key={index} 
//                   value={`item-${index}`}
//                   className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden"
//                 >
//                   <AccordionTrigger className="px-6 py-4 text-white hover:text-white/80 text-left">
//                     <div className="flex items-center gap-3">
//                       <ArrowUpRight className="h-4 w-4 text-white/60 flex-shrink-0" />
//                       <span className="font-medium">{item.question}</span>
//                     </div>
//                   </AccordionTrigger>
//                   <AccordionContent className="px-6 pb-4">
//                     <p className="text-white/70 leading-relaxed">
//                       {item.answer}
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>

//         {/* Bottom Right - Buy Template Button */}
//         <div className="flex justify-end mt-12">
//           <Button 
//             variant="outline" 
//             className="bg-gray-900/50 border-white/10 text-white hover:bg-white/10 hover:text-white group"
//           >
//             Buy template
//             <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ; 