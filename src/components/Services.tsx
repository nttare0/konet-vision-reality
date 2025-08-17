import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, HardHat, Truck, PaintBucket, Wrench, Pickaxe } from "lucide-react";
import { useRef, useEffect, useState } from "react";
const services = [{
  icon: Building2,
  title: "Residential Construction",
  description: "Custom homes and residential complexes built with precision, quality materials, and attention to detail."
}, {
  icon: HardHat,
  title: "Commercial Projects",
  description: "Office buildings, retail spaces, and industrial facilities designed for functionality and durability."
}, {
  icon: Hammer,
  title: "Renovation & Remodeling",
  description: "Transform existing spaces with modern designs while preserving structural integrity and character."
}, {
  icon: Truck,
  title: "Infrastructure Development",
  description: "Roads, bridges, and utility installations that form the backbone of modern communities."
}, {
  icon: PaintBucket,
  title: "Interior & Finishing",
  description: "Complete interior solutions from flooring to lighting, creating spaces that inspire and function."
}, {
  icon: Wrench,
  title: "Maintenance & Repair",
  description: "Ongoing maintenance services to keep your properties in optimal condition year-round."
}, {
  icon: Pickaxe,
  title: "Mining",
  description: "Professional mining operations and mineral extraction services with sustainable practices and modern equipment."
}];
const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return <section ref={ref} id="services" className="py-20 bg-konet-light-blue">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-konet-blue mb-4">What We Build</h2>
          <p className="text-xl text-konet-gray max-w-2xl mx-auto">
            We provide comprehensive construction solutions to build your vision and create lasting structures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card 
            key={index} 
            className={`group hover:shadow-elegant transition-all duration-500 border-0 bg-background transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
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
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;