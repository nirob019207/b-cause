import Banner from "@/components/home/Banner";
import CompanyOverview from "@/components/home/CompanyOverview";
import PastPerformance from "@/components/home/PastPerformance";
import ProcessFlow from "@/components/home/ProcessFlow";
import ServicesSection from "@/components/home/ServiceSection";
import StrengthsSection from "@/components/home/StrengthsSection";

const HomePage = () => {
  return (
    <div>
     <Banner/>
      <ServicesSection />
      <ProcessFlow />
      <StrengthsSection />
      <CompanyOverview />
      <PastPerformance />
    </div>
  );
};

export default HomePage;
