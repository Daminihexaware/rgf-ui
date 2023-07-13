import "./index.css";
import { contenthome } from "../../assets/images";

const VehicleSimulation = () => {
  return (
    <div>
      <div>
        <img src={contenthome} className="content-home" />
      </div>
      <div className="p-5">
        <span className="h3">Simulation en ligne</span>
      </div>

      <div className="p-5">
        <div className="row p-2">
          <span className="h4">Remplissez votre numero de chassis</span>
          <div className="p-5">
            <input
              className="form-control"
              type="text"
              width="100"
              placeholder="ABCDEFG1234567890"
            />
          </div>
        </div>
      </div>

      <div style={{ float: "right" }}>
        <div className="p-2">
          <button disabled type="button" className="btn btn-primary">
            Suivant
          </button>
        </div>
        <div className="p-2">
          <button type="button" className="btn btn-primary">
            Sans numero de chassis
          </button>
        </div>
      </div>
    </div>
  );
};
export default VehicleSimulation;
