import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    
    // WhatsApp number (removing + and spaces)
    const whatsappNumber = "250790824205";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    toast({
      title: "Success",
      description: "Redirecting to WhatsApp to send your message",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Turn Your Vision Into Reality
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your digital transformation journey? Get in touch with our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Phone className="w-6 h-6 text-konet-navy" />
                </div>
                <CardTitle className="text-white">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">+250 788 791 451</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-6 h-6 text-konet-navy" />
                </div>
                <CardTitle className="text-white">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">info@konet.rw</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-konet-navy" />
                </div>
                <CardTitle className="text-white">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">Kigali, Rwanda</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-konet-electric"
                        required
                      />
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email" 
                        type="email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-konet-electric"
                        required
                      />
                    </div>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-konet-electric"
                      required
                    />
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message" 
                      rows={6}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-konet-electric resize-none"
                      required
                    />
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;