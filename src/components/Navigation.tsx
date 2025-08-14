import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-konet-navy font-bold text-xl">K</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-konet-blue">KONET</h1>
            <p className="text-xs text-konet-gray">Vision to Reality</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-konet-blue transition-colors">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-konet-blue transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-konet-blue transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-konet-blue transition-colors">
            Contact
          </a>
        </div>
        
        <Button variant="hero" size="default" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;