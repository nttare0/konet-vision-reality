import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-konet-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-konet-navy font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">KONET</h1>
                <p className="text-sm text-white/70">Vision to Reality</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Transforming architectural visions into exceptional structures. Your trusted construction partner for building dreams into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-konet-electric transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-konet-electric transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-konet-electric transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-konet-electric transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-konet-electric transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-konet-electric transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-konet-electric transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-konet-electric" />
                <span className="text-white/80">+250 786 043 756

              </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-konet-electric" />
                <span className="text-white/80">info@konet.rw</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-konet-electric" />
                <span className="text-white/80">Kigali, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 KONET. All rights reserved. Turning Vision Into Reality.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;