import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="animate-bounce-in">
        <Hero />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <Services />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
        <About />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '900ms' }}>
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
