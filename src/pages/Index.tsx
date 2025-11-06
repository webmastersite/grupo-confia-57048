import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
