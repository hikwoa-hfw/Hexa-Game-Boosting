import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeComponent from "../components/MarqueeComponent";
import ValueProposition from "../components/ValueProposition";
import CompanyOverview from "../components/CompanyOverview";
import CompanyTagline from "../components/CompanyTagline";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <HeroSection />
      <MarqueeComponent />
      <ValueProposition />
      <CompanyOverview />
      <Service />
      <Testimonials />
      <CompanyTagline />
      <Footer />
    </div>
  );
}
