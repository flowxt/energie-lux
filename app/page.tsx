import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import EligibilityForm from "./components/EligibilityForm";
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
      <Hero />
      <ServicesGrid />
      <EligibilityForm />
      <AidExamples />
      <HowItWorks />
      <RenovationServices />
      <WhyUs />
      <FAQ />
      <Footer />
    </>
  );
}
