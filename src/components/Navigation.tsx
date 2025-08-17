import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src="/lovable-uploads/1dfa864c-e1de-46b2-b464-be0f0ea2c80c.png" alt="KONET Logo" className="w-full h-full object-contain filter contrast-125 brightness-110" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-konet-blue">KONET</h1>
            <p className="text-xs text-konet-gray">Vision to Reality</p>
            <p className="text-xs text-konet-gray/80 italic">Building Rwanda's tomorrow with purpose, precision, and pride.</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-konet-blue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-foreground hover:text-konet-blue transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-foreground hover:text-konet-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-konet-blue transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="hero" size="default" className="hidden sm:flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Contact Us
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-konet-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground hover:text-konet-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-foreground hover:text-konet-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block text-foreground hover:text-konet-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-foreground hover:text-konet-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant="hero" size="default" className="w-full flex items-center justify-center gap-2 mt-4">
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;