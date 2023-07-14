import "./habitation.css";
import {
  calculation,
  calendar,
  mail,
  habitationImg,
} from "../../assets/images";
import { Link } from "react-router-dom";

const VehicleHabitation = () => {
  return (
    <div className="container">
      <div>
        <img src={habitationImg} className="content-home" />
      </div>
      <div className="p-5">
        <span className="h5 headerColor">
          {/* Assurez vous de multiple dommages lies a votre habitation ! */}
          Insure your home against multiple damages!
        </span>
      </div>

      <div className="container bgColor p-5">
        <div className="row p-2">
          <span className="h5 text-white">
            {/* Composez votre assurance habitation ideale */}
            Compose your ideal home insurance policy
          </span>
        </div>
        <div className="row d-flex align-items-center justify-content-center p-5">
          <div className="row">
            <img className="col-3 p-2 order-1 iconSize" src={calculation} />
            <span className="h6 text-white text-center col-6 p-0 order-1">
              {/* Je prends rendez-vous avec un conseiller */}I make an online
              simulation
            </span>
            <Link
              to="/VehicleSimulation"
              style={{ width: "200px", background: "lightgreen" }}
              className="btn btn-primary col-3 mb-2 order-1"
            >
              Simulation
            </Link>
          </div>
          <div className="row">
            <img className="col-3 p-2 order-1 iconSize" src={calendar} />
            <span className="h6 text-white text-center col-6 p-0 order-1">
              {/* Je souhaite recevoir plus d informations */}Make an
              appointment with a consultant
            </span>
            <Link
              to="/VehicleSimulation"
              style={{ width: "200px", background: "orange" }}
              className="btn btn-primary col-3 mb-2 order-1"
            >
              Rendez-vous
            </Link>
          </div>

          <div className="row">
            <img className="col-3 p-2 order-1 iconSize" src={mail} />
            <span className="h6 text-white text-center col-6 p-0 order-1">
              {/* Composez votre assurance habitation ideale */}I would like to
              receive more information
            </span>
            <Link
              to="/VehicleSimulation"
              style={{ width: "200px", background: "skyblue" }}
              className="btn btn-primary col-3 mb-2 order-1 iconSize"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleHabitation;
