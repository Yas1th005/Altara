import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffb86b]/20 via-[#ff6a3d]/20 to-[#ffb86b]/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow">
            <Mail className="h-4 w-4" />
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Get in touch</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 border border-white/10 rounded-2xl p-10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-white/80">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" variant="hero" className="w-full group">
                Send message
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's start a conversation</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Whether you're looking to automate workflows, implement chatbots, or explore AI consulting, 
                we're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email us</div>
                  <div className="text-white/60">hello@auralis.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call us</div>
                  <div className="text-white/60">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffb86b]/30 via-[#ff6a3d]/30 to-[#ffb86b]/30 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Visit us</div>
                  <div className="text-white/60">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 border border-white/10 rounded-2xl p-8">
              <h4 className="font-semibold mb-2 text-white">Response time</h4>
              <p className="text-white/70">
                We typically respond to all inquiries within 24 hours. For urgent matters, 
                please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;