import HeroSection from "../components/HeroSection";
import MarqueeComponent from "../components/MarqueeComponent";
import ValueProposition from "../components/ValueProposition";
import CompanyOverview from "../components/CompanyOverview";
import CompanyTagline from "../components/CompanyTagline";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <div className="text-white">
      <HeroSection />
      <MarqueeComponent />
      <ValueProposition />
      <CompanyOverview />
      <Service />
      <Testimonials />
      <CompanyTagline />
    </div>
  );
}
