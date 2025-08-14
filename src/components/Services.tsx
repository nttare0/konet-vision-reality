import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Zap, 
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience."
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that engage users and drive business growth."
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and visualization solutions."
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Complete digital transformation strategies to streamline processes and boost efficiency."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-konet-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-konet-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-konet-gray max-w-2xl mx-auto">
            We provide comprehensive technology solutions to transform your business and achieve your digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-background">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-konet-navy" />
                </div>
                <CardTitle className="text-xl text-konet-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-konet-gray text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;