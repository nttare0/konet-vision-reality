import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Settings, Zap, Shield, Sprout, Home, Wrench, Pickaxe } from "lucide-react";
import { Link } from "react-router-dom";
import mechanicalHvac from "@/assets/mechanical-hvac.jpg";
import engineeringDesign from "@/assets/engineering-design.jpg";
import electricalTech from "@/assets/electrical-tech.jpg";
import commissioning from "@/assets/commissioning.jpg";
import fireProtection from "@/assets/fire-protection.jpg";
import landscaping from "@/assets/landscaping.jpg";
import interiorRenovation from "@/assets/interior-renovation.jpg";
import miningOperations from "@/assets/mining-operations.jpg";
import buildingsBackground from "@/assets/buildings-background.jpg";

const services = [
  {
    icon: Settings,
    title: "Mechanical HVAC and Plumbing",
    description: "Complete heating, ventilation, air conditioning, and plumbing solutions for residential and commercial buildings.",
    image: mechanicalHvac,
    features: ["HVAC System Design & Installation", "Plumbing Infrastructure", "Ventilation Systems", "Maintenance Services"]
  },
  {
    icon: Wrench,
    title: "Engineering and Design",
    description: "Professional engineering services and architectural design solutions for all types of construction projects.",
    image: engineeringDesign,
    features: ["Structural Engineering", "Architectural Design", "Project Planning", "Technical Drawings"]
  },
  {
    icon: Zap,
    title: "Electrical + Technology",
    description: "Modern electrical systems and smart technology integration for efficient and connected buildings.",
    image: electricalTech,
    features: ["Electrical Wiring", "Smart Home Systems", "Network Infrastructure", "Automation Solutions"]
  },
  {
    icon: Shield,
    title: "Commissioning Services",
    description: "Quality assurance and testing services to ensure all building systems operate as designed.",
    image: commissioning,
    features: ["System Testing", "Performance Verification", "Quality Control", "Documentation"]
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Comprehensive fire safety systems and protection solutions for maximum building security.",
    image: fireProtection,
    features: ["Fire Alarm Systems", "Sprinkler Installation", "Safety Equipment", "Emergency Planning"]
  },
  {
    icon: Sprout,
    title: "Landscaping",
    description: "Beautiful outdoor spaces and landscape design that complement your building's architecture.",
    image: landscaping,
    features: ["Garden Design", "Irrigation Systems", "Outdoor Lighting", "Maintenance Services"]
  },
  {
    icon: Home,
    title: "Interior Design Renovation & Remodeling",
    description: "Transform your spaces with modern interior design and professional renovation services.",
    image: interiorRenovation,
    features: ["Space Planning", "Modern Interiors", "Kitchen & Bath Remodeling", "Custom Solutions"]
  },
  {
    icon: Pickaxe,
    title: "Mining Operations",
    description: "Professional mining and quarry operations with sustainable practices and modern equipment for material extraction.",
    image: miningOperations,
    features: ["Quarry Operations", "Material Extraction", "Equipment Services", "Sustainable Mining"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background to-konet-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-bounce-in">
            <h1 className="text-5xl md:text-6xl font-bold text-konet-blue mb-6">
              Our Services
            </h1>
            <p className="text-xl text-konet-gray mb-8">
              Comprehensive construction and design solutions to bring your vision to life. From planning to completion, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 bg-gradient-to-br from-background to-konet-light-blue hover:shadow-elegant transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-konet-navy/80 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-konet-navy" />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-konet-blue mb-4 group-hover:text-konet-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-konet-gray mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-konet-gray">
                        <ArrowRight className="w-4 h-4 text-konet-blue mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button variant="primary" className="w-full group-hover:bg-konet-navy transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-konet-blue to-konet-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: `url(${buildingsBackground})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-konet-blue/80 to-konet-navy/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
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
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-white text-konet-navy hover:bg-konet-light-blue hover:text-white">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;