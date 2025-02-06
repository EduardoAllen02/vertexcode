import "../styles/infobox.css";

const InfoBox = ({ number, label }) => {
  return (
    <div className="info-box">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
};

export default InfoBox;
