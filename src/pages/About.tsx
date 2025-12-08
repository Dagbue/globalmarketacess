import AboutHero from '../components/about/AboutHero';
import TrustStats from '../components/about/TrustStats';
import SecuritySection from '../components/about/SecuritySection';
import WhyTradeSection from '../components/about/WhyTradeSection';
import TradingFeatures from '../components/about/TradingFeatures';
import ExecutionStats from '../components/about/ExecutionStats';
import TradingConfidence from '../components/about/TradingConfidence';
import FocusOnTrading from '../components/about/FocusOnTrading';
import CommoditiesTrading from '../components/about/CommoditiesTrading';
import IndexMarket from '../components/about/IndexMarket';

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <TrustStats />
      <SecuritySection />
      <WhyTradeSection />
      <TradingFeatures />
      <ExecutionStats />
      <TradingConfidence />
      <FocusOnTrading />
      <CommoditiesTrading />
      <IndexMarket />
    </div>
  );
}
