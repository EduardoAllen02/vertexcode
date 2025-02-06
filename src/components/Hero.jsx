import "../styles/hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>VERTEX CODEWORKS</h1>
        <div>
      
        <p className="p-2">APPS, SOFTWARE, DESARROLLO WEB Y MÁS.</p>
        </div>
        <Button text="Conócenos" />
      </div>
    </section>
  );
};

export default Hero;
