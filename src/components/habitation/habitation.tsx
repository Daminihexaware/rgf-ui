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
    <div>
      <div>
        <img src={habitationImg} className="content-home" />
      </div>
      <div className=" container p-5">
        <span className="h5 headerColor">
          {/* Assurez vous de multiple dommages lies a votre habitation ! */}
          Insure your home against multiple damages!
        </span>
      </div>

      <div className="container bgColor p-5">
        <div className="row p-2">
          <span className="h5 text-white">
            Compose your ideal home insurance policy
            <hr className="horizontal-line" />
            {/* Composez votre assurance habitation ideale */}
          </span>
        </div>
        <div className="row d-flex align-items-center justify-content-center p-5">
          <div className="row">
            <div className="col-2">
              <img className="p-2 iconSize" src={calculation} />
            </div>
            <div className="col-6">
              <span className="h6 text-white text-center p-2">
                {/* Je prends rendez-vous avec un conseiller */}I make an online
                simulation
              </span>
            </div>
            <div className="col-4">
              <Link
                to="/VehicleSimulation"
                style={{ width: "210px" }}
                className="btn btn-sm mb-2"
              >
                Simulation
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img className="p-2 iconSize" src={calendar} />
            </div>
            <div className="col-6">
              <span className="h6 text-white text-center p-2">
                {/* Je souhaite recevoir plus d informations */}Make an
                appointment with a consultant
              </span>
            </div>
            <div className="col-4">
              <Link
                to="/VehicleSimulation"
                style={{ width: "210px", backgroundColor: "orange !important" }}
                className="btn btn-sm col-3 mb-2"
              >
                Rendez-vous
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <img className="p-2 iconSize" src={mail} />
            </div>
            <div className="col-6">
              <span className="h6 text-white text-center col-6 p-2">
                {/* Composez votre assurance habitation ideale */}
                Compose your ideal home insurance I would like to receive more
                information
              </span>
            </div>
            <div className="col-4">
              <Link
                to="/VehicleSimulation"
                style={{
                  width: "210px",
                  backgroundColor: "skyblue !important",
                }}
                className="btn btn-sm mb-2 iconSize"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleHabitation;
