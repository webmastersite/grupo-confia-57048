import { HeroHouse } from "@/components/HeroHouse";
import { HowItWorksHouse } from "@/components/HowItWorksHouse";
import { ConsortiumTypesHouse } from "@/components/ConsortiumTypesHouse";
import { BenefitsHouse } from "@/components/BenefitsHouse";
import { SimulatorHouse } from "@/components/SimulatorHouse";
import { CTAHouse } from "@/components/CTAHouse";
import { WhatsAppFloatHouse } from "@/components/WhatsAppFloatHouse";
import { ScrollToTopHouse } from "@/components/ScrollToTopHouse";
import { CookieConsentHouse } from "@/components/CookieConsentHouse";

const HouseCampolim = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTopHouse />
      <HeroHouse />
      <HowItWorksHouse />
      <ConsortiumTypesHouse />
      <BenefitsHouse />
      <SimulatorHouse />
      <CTAHouse phoneNumber="32127790" whatsappNumber="5515998001647" />
      <WhatsAppFloatHouse />
      <CookieConsentHouse />
    </div>
  );
};

export default HouseCampolim;
