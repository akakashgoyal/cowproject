import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { MissionSection } from "@/components/ui/mission-section";
import { ProductsSection } from "@/components/ui/products-section";
import { ImpactStoriesSection } from "@/components/ui/impact-stories-section";
import { EmergencySection } from "@/components/ui/emergency-section";
import { VolunteerSection } from "@/components/ui/volunteer-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ProductsSection />
      <ImpactStoriesSection />
      <EmergencySection />
      <VolunteerSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
