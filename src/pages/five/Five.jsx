import "./five.css";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import MailIcon from "@mui/icons-material/Mail";
const Five = () => {
  return (
    <div className="main">
      <div className="five">
        <div className="five-left">
          <div className="logo">
            <TripOriginIcon style={{ fontSize: "10vw", color: "#78EFFF" }} />
          </div>
          <div className="five-span">
            <span>Recibe tips y mantente al día para tus viajes.</span>
          </div>
        </div>
        <div className="five-right">
          <div className="five-input">
            <input type="text" placeholder="  ESCRIBE TU EMAIL"></input>
            <button>ENVIAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
