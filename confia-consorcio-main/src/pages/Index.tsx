import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorksHome } from "@/components/HowItWorksHome";
import { ConsortiumTypesHome } from "@/components/ConsortiumTypesHome";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Simulator } from "@/components/Simulator";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorksHome />
      <ConsortiumTypesHome />
      <Benefits />
      <Testimonials />
      <Simulator />
      <CTA phoneNumber="32127790" whatsappNumber="551532127790" />
      <Footer />
    </div>
  );
};

export default Index;
