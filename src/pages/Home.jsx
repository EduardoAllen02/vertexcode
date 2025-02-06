import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import InfoBox from "../components/InfoBox";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="info-section">
        <InfoBox number="2,000" label="Temples" />
        <InfoBox number="6,850" label="Islands" />
        <InfoBox number="362" label="Rivers" />
      </div>
    </div>
  );
};

export default Home;
