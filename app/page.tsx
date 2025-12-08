import Header from "./components/Header";
import HeroWithForm from "./components/HeroWithForm";
import ServicesGrid from "./components/ServicesGrid";
import TrustBanner from "./components/TrustBanner";
import AidExamples from "./components/AidExamples";
import HowItWorks from "./components/HowItWorks";
import RenovationServices from "./components/RenovationServices";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroWithForm />
      <AidExamples />
      <ServicesGrid />
      <TrustBanner />
      <HowItWorks />
      <RenovationServices />
      <WhyUs />
      <FAQ />
      <Footer />
    </>
  );
}
