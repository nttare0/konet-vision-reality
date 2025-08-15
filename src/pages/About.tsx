import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, ArrowRight, Target, Users, Award, Lightbulb } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import aboutHero from "@/assets/about-hero.jpg";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 150, suffix: "+", label: "Projects Completed" },
  { icon: Target, value: 99, suffix: "%", label: "Success Rate" },
  { icon: Lightbulb, value: 24, suffix: "/7", label: "Support Available" }
];

const locations = [
  {
    province: "Eastern Province",
    cities: ["Rwamagana", "Nyagatare"]
  },
  {
    province: "Southern Province", 
    cities: ["Huye", "Nyanza", "Muhanga"]
  },
  {
    province: "Northern Province",
    cities: ["Musanze"]
  },
  {
    province: "Western Province",
    cities: ["Rubavu", "Karongi", "Rusizi"]
  },
  {
    province: "Kigali City",
    cities: ["Kigali"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="KONET Construction Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-konet-navy/90 to-konet-blue/80" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About KONET
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Building Excellence Into Every Structure Across Rwanda
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-konet-blue mb-6">
                What Describes Us
              </h2>
              <p className="text-lg text-konet-gray mb-6">
                At KONET, we believe every vision deserves to become reality. Founded on the principle of turning architectural dreams into exceptional structures, we've been at the forefront of construction innovation in Rwanda.
              </p>
              <p className="text-lg text-konet-gray mb-6">
                Our team of expert builders, engineers, and craftsmen work tirelessly to deliver projects that not only meet your current needs but stand strong for generations. We don't just build structures; we build legacies.
              </p>
              <p className="text-lg text-konet-gray mb-8">
                With a commitment to quality, innovation, and customer satisfaction, KONET has established itself as Rwanda's trusted partner for comprehensive construction and design solutions.
              </p>
              <Button variant="primary" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const StatCard = () => {
                  const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
                  
                  return (
                    <Card ref={ref} className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-konet-light-blue animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                      <CardContent className="p-0">
                        <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                          <stat.icon className="w-6 h-6 text-konet-navy" />
                        </div>
                        <div className="text-3xl font-bold text-konet-blue mb-2">
                          {Math.floor(count)}{stat.suffix}
                        </div>
                        <div className="text-konet-gray">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                };
                
                return <StatCard key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-br from-background to-konet-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-konet-blue mb-6">
              Where We Serve
            </h2>
            <p className="text-xl text-konet-gray max-w-3xl mx-auto">
              KONET proudly serves communities across Rwanda, bringing quality construction and design services to every corner of the country.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card 
                key={index} 
                className="group p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-konet-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-konet-blue group-hover:text-konet-navy transition-colors">
                      {location.province}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {location.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="flex items-center text-konet-gray">
                        <ArrowRight className="w-4 h-4 text-konet-blue mr-2" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
    </div>
  );
};

export default About;