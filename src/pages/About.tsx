import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MapPin, ArrowRight, Target, Users, Award, Lightbulb } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import aboutHero from "@/assets/about-hero.jpg";
import buildingsBackground from "@/assets/buildings-background.jpg";

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
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="KONET Construction Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-konet-navy/90 to-konet-blue/80" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-bounce-in">
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
                At Konet Construction, we build more than structures—we build the foundation of Rwanda's tomorrow. Our comprehensive construction services bring together decades of local expertise in civil works, materials supply, quarry operations, and landscape development.
              </p>
              <p className="text-lg text-konet-gray mb-6">
                Whether constructing new homes, developing commercial spaces, building essential road networks, or preparing sites for future growth, we understand the unique challenges and opportunities within Rwanda's construction landscape. Our local quarry operations and materials supply ensure that every project benefits from the highest quality resources sourced right here at home.
              </p>
              <p className="text-lg text-konet-gray mb-6">
                Our commitment extends beyond construction to environmental stewardship through professional landscaping and sustainable site development practices. From government infrastructure projects to private residential developments, we deliver solutions that strengthen communities and support Rwanda's vision for sustainable growth.
              </p>
              <p className="text-lg text-konet-gray mb-8">
                Partner with Konet Construction and experience the difference that local expertise, integrated services, and genuine commitment to excellence can make in your next project.
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

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-background to-konet-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-konet-blue mb-6">
              Vision, Mission & Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <Card className="group p-8 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-white animate-fade-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-konet-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-konet-blue">🎯 VISION</h3>
                </div>
                <p className="text-konet-gray leading-relaxed">
                  To be Rwanda's leading integrated construction company, recognized for building sustainable infrastructure that drives national development and transforms communities for generations to come.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="group p-8 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-white animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-konet-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-konet-blue">🚀 MISSION</h3>
                </div>
                <p className="text-konet-gray leading-relaxed">
                  We deliver comprehensive construction solutions through our integrated services of civil works, materials supply, quarry operations, and landscaping, combining local expertise with international standards to build Rwanda's future while fostering economic growth, environmental sustainability, and community development.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="group p-8 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-white animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-konet-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-konet-blue">💎 CORE VALUES</h3>
                </div>
                <div className="space-y-4 text-konet-gray">
                  <div>
                    <h4 className="font-semibold text-konet-blue mb-1">EXCELLENCE</h4>
                    <p className="text-sm">We pursue the highest standards in every project, ensuring superior quality that exceeds expectations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-konet-blue mb-1">INTEGRITY</h4>
                    <p className="text-sm">We conduct business with honesty and transparency, building trust through reliable partnerships.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-konet-blue mb-1">INNOVATION</h4>
                    <p className="text-sm">We embrace modern technologies while respecting traditional craftsmanship.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-konet-blue mb-1">COMMUNITY</h4>
                    <p className="text-sm">We strengthen Rwandan communities through local employment and infrastructure development.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-konet-blue mb-1">SUSTAINABILITY</h4>
                    <p className="text-sm">We protect natural resources through environmentally responsible practices.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-konet-blue mb-1">COLLABORATION</h4>
                    <p className="text-sm">We work as integrated teams, fostering open communication and shared success.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-br from-konet-light-blue to-background">
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
      <section className="relative py-20 bg-gradient-to-r from-konet-blue to-konet-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{backgroundImage: `url(${buildingsBackground})`}}></div>
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

export default About;