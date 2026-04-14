import AboutUsSection from "./aboutUs/AboutUsSection";
import BestDentistsSection from "./bestDentists/BestDentistsSection";
import BlogSection from "./blog/BlogSection";
import ClientReviewsSection from "./clientReviews/ClientReviewsSection";
import FirstVisitDiscountSection from "./firstVisitDiscount/FirstVisitDiscountSection";
import HeroSection from "./hero/HeroSection";
import PartnersSection from "./partners/PartnersSection";
import StatsSection from "./stats/StatsSection";
import TreatmentsSection from "./treatments/TreatmentsSection";

const Main = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      {/* set z-index: 1 in order to limit the blurs from the hero section */}
      <div className="z-1 flex flex-col bg-bg-secondary">
        <PartnersSection />
        <AboutUsSection />
        <TreatmentsSection />
        <StatsSection />
        <BestDentistsSection />
        <FirstVisitDiscountSection />
        <ClientReviewsSection />
        <BlogSection />
      </div>
    </main>
  );
};

export default Main;
