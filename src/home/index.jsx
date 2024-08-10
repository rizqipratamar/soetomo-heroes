import CTASection from "./CTA";
import Explore from "./Explore";
import Feature from "./Feature";
import FeaturePro from "./FeaturePro";
import Hero from "./Hero";
import OTCSection from "./OTC";
import PointPlus from "./PointPlus";

const Home = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Hero />
      <Feature />
      <FeaturePro />
      <Explore />
      <OTCSection />
      <PointPlus />
      <CTASection />
    </div>
  );
};

export default Home;
