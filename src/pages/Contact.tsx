import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hello KONET!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/250788123456?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message sent!",
      description: "Your message has been sent via WhatsApp.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactHero} 
            alt="Contact KONET"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-konet-navy/90 to-konet-blue/80" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our team to discuss your construction project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="group text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-konet-light-blue animate-fade-in">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-konet-navy" />
                </div>
                <h3 className="text-xl font-bold text-konet-blue mb-2">Phone</h3>
                <p className="text-konet-gray">+250 788 123 456</p>
                <p className="text-konet-gray">+250 722 987 654</p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-konet-light-blue animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-konet-navy" />
                </div>
                <h3 className="text-xl font-bold text-konet-blue mb-2">Email</h3>
                <p className="text-konet-gray">info@konet.rw</p>
                <p className="text-konet-gray">projects@konet.rw</p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-konet-light-blue animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-konet-navy" />
                </div>
                <h3 className="text-xl font-bold text-konet-blue mb-2">Address</h3>
                <p className="text-konet-gray">KK 31 Ave, Kigali</p>
                <p className="text-konet-gray">Rwanda</p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-konet-light-blue animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-konet-navy" />
                </div>
                <h3 className="text-xl font-bold text-konet-blue mb-2">Working Hours</h3>
                <p className="text-konet-gray">Mon - Fri: 8:00 - 18:00</p>
                <p className="text-konet-gray">Sat: 9:00 - 15:00</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-konet-blue mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    className="mt-1 min-h-32"
                  />
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-3xl font-bold text-konet-blue mb-6">Find Us Here</h2>
              <div className="group relative h-96 rounded-lg overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4694796566882!2d30.07378410853842!3d-1.9661160980078056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70073ea9041%3A0x3586048b13c36b43!2sKONET%20vision%20to%20reality!5e0!3m2!1sen!2srw!4v1755384100743!5m2!1sen!2srw"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-105 transition-transform duration-300"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-konet-navy/20 to-transparent pointer-events-none group-hover:from-konet-navy/30 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-konet-blue to-konet-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              LET'S WORK TOGETHER
            </h2>
            <h3 className="text-2xl font-semibold text-konet-light-blue mb-8">
              START YOUR PROJECT TODAY
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to turn your home dreams into reality? Our expert team is here to guide you through every step of the process, ensuring a seamless and enjoyable experience. Contact us today to start planning your next project.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-konet-navy hover:bg-konet-light-blue hover:text-white">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;