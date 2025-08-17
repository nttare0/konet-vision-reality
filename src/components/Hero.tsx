import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Dreams
            </span>{" "}
            Into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-amber-200">Our Vision
Committed to being the contractor of choice, delivering best-in-class, award-winning work.



        </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
        </div>
        
      </div>
    </section>;
};
export default Hero;