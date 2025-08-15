import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 150, suffix: "+", label: "Projects Completed" },
  { icon: Target, value: 99, suffix: "%", label: "Success Rate" },
  { icon: Lightbulb, value: 24, suffix: "/7", label: "Support Available" }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-konet-blue mb-6">
              Building Excellence Into Every Structure
            </h2>
            <p className="text-lg text-konet-gray mb-6">
              At KONET, we believe every vision deserves to become reality. Founded on the principle of turning architectural dreams into exceptional structures, we've been at the forefront of construction innovation in Rwanda.
            </p>
            <p className="text-lg text-konet-gray mb-8">
              Our team of expert builders, engineers, and craftsmen work tirelessly to deliver projects that not only meet your current needs but stand strong for generations. We don't just build structures; we build legacies.
            </p>
            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const StatCard = () => {
                const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
                
                return (
                  <Card ref={ref} className="text-center p-6 hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-konet-light-blue">
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
  );
};

export default About;