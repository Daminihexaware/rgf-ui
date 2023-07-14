import "./simulation.css";
import { contenthome } from "../../assets/images";
import { Link } from "react-router-dom";
import { useState } from 'react'

const VehicleSimulation = () => {
  const [vNumber, setVnumber] = useState('')
  const handleChange = (e) => {
     e.preventDefault()
     setVnumber(e.target.value)
  }
  return (
    <div>
      <div>
        <img src={contenthome} className="content-home" />
      </div>
      <div className="p-5">
        <span className="h3">
          {/* Simulation en ligne */}
          Online simulation
        </span>
      </div>

      <div className="p-5">
        <div className="row p-2">
          <span className="h4">
            {/* Remplissez votre numero de chassis */}
            Enter your chassis number
          </span>
          <div className="p-5">
            <input
              className="form-control"
              type="text"
              width="100"
              placeholder="ABCDEFG1234567890"
              value={vNumber}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div style={{ float: "right" }}>
        <div className="p-2">
          <Link
            to="/Car/YourCarDetails">
            <button type="button" disabled={!vNumber}
            className="btn btn-primary">
              {/* Suivant */}
              Next
            </button>
          </Link>
        </div>
        <div className="p-2">
          <Link
            to="/Car/YourCar"
            style={{ width: "200px", background: "lightgreen" }}
            className="btn btn-primary col-3 mb-2 order-1"
          >
            Without chassis number
          </Link>
          {/* <button type="button" className="btn btn-primary">
            Sans numero de chassis
            Without chassis number
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default VehicleSimulation;
