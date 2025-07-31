import React, { useState } from "react";

import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { sendContactEmail } from "../../lib/email";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      alert('Message sent successfully! Our team Altara will contact you soon.');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center mb-16">
                <button 
                // variant="outline" 
                className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
                >
                Contact
                </button>
                <h2 className="text-4xl md:text-6xl font-medium mb-6 text-white tracking-tight">Get in touch!</h2>
                <p className="text-xl md:text-sm text-white/60 mb-12 max-w-2xl mx-auto font-light ">
                We'd love to talk about how we can integrate AI in your business. Leave us a message and we'll get back to you within 24 hours to schedule a call!
                </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-xl font-medium lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li className="font-medium text-sm">
                  <span className="font-medium text-sm">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-medium text-sm">Email: </span>
                  <a href={`mailto:${email}`} className="underline font-medium text-sm">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-sm">Web: </span>
                  <a href={web.url} target="_blank" className="underline font-medium text-sm">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-white/10 p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  type="text" 
                  id="firstName" 
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  type="text" 
                  id="lastName" 
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                placeholder="Type your message here." 
                id="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
