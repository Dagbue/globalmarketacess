import Hero from '../components/Hero';
import Features from '../components/Features';
import ToolsSection from '../components/ToolsSection';
// import Awards from '../components/Awards';
import GetStarted from '../components/GetStarted';
import CopyTrading from '../components/CopyTrading';
import TopTraders from '../components/TopTraders';
import InvestmentPlans from '../components/InvestmentPlans';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ToolsSection />
      {/*<Awards />*/}
      <GetStarted />
      <CopyTrading />
      <TopTraders />
      <InvestmentPlans />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <ContactSection />
    </main>
  );
}
