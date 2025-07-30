import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { MissionSection } from "@/components/ui/mission-section";
import { ProductsSection } from "@/components/ui/products-section";
import { ImpactStoriesSection } from "@/components/ui/impact-stories-section";
import { EmergencySection } from "@/components/ui/emergency-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProductsSection />
      <EmergencySection />
      <ImpactStoriesSection />
      <Footer />
    </div>
  );
};

export default Index;
