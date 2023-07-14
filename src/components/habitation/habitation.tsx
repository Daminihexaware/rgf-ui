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
    <div className="pb-5">
      <div>
        <img src={habitationImg} className="content-home" />
      </div>
      <div className=" container p-5">
        <span className="h5 headerColor">
          {/* Assurez vous de multiple dommages lies a votre habitation ! */}
          Insure your home against multiple damages!
        </span>
      </div>

      <div className="container bgColor p-4">
        <div className="row p-2">
          <span className="h5 text-white">
            Compose your ideal home insurance policy
            <hr className="horizontal-line" />
            {/* Composez votre assurance habitation ideale */}
          </span>
        </div>
        <div className="row d-flex align-items-center justify-content-center py-2">
          <div className="row px-0 d-flex align-items-center">
            <div className="col-md-8 col-xs-12 d-flex align-items-center">
              <img className="p-2 iconSize" src={calculation} />
              <div className="h6 text-white text-size">
                {/* Je prends rendez-vous avec un conseiller */}I make an online
                simulation
              </div>
            </div>
            <div className="col-md-4 col-xs-12 mb-2 d-flex justify-content-end">
              <Link to="/VehicleSimulation" className="btn btn-sm p-2 btn-size">
                Simulation
              </Link>
            </div>
          </div>
          <div className="row px-0 d-flex align-items-center">
            <div className="col-md-8 col-xs-12 d-flex align-items-center">
              <img className="p-2 iconSize" src={calendar} />
              <div className="h6 text-white text-size">
                {/* Je souhaite recevoir plus d informations */}Make an
                appointment with a consultant
              </div>
            </div>
            <div className="col-md-4 col-xs-12 mb-2 d-flex justify-content-end">
              <Link
                to="/VehicleSimulation"
                className="btn btn-sm col-3 btn-orange p-2 btn-size"
              >
                Rendez-vous
              </Link>
            </div>
          </div>

          <div className="row px-0 d-flex align-items-center">
            <div className="col-md-8 col-xs-12 d-flex align-items-center">
              <img className="p-2 iconSize" src={mail} />
              <div className="h6 text-white col-6 text-size">
                {/* Composez votre assurance habitation ideale */}
                Compose your ideal home insurance I would like to receive more
                information
              </div>
            </div>
            <div className="col-md-4 col-xs-12 mb-2 d-flex justify-content-end">
              <Link
                to="/VehicleSimulation"
                className="btn btn-sm iconSize btn-blue p-2 btn-size"
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
