import "./simulation.css";
import { contenthome } from "../../assets/images";
import { useState } from "react";
import React from "react";

const VehicleSimulation = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("");
  const handleClick = () => {
    setOpen(!open);
  };

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <div>
      <div>
        <div className={open ? "popup" : "popup-hide"}>
          <i
            className="fa fa-times-circle"
            onClick={handleClick}
            aria-hidden="true"
          ></i>
          <h4>
            Le numéro de chassis
            <hr />{" "}
          </h4>
          <p>
            7 Le numéro de chassis Ce numéro se trouve généralement à plusieurs
            endroits :
          </p>
          <p>
            Sur la planche de bord côté conducteur – vous pouvez le voir à
            travers le pare-brise depuis l’extérieur de la voiture.
          </p>
          <p>
            Sur la porte côté conducteur, vérifiez l’autocollant qui contient
            des informations sur la voiture, y compris le numéro de chassis.
          </p>{" "}
          <p>
            {" "}
            Dans le compartiment moteur – ce numéro peut se trouver sur le bloc
            moteur ou d’autres pièces du moteur.{" "}
          </p>
          <p>
            {" "}
            Sur les documents d’immatriculation de la voiture – généralement sur
            le certificat d’immatriculation du véhicule.
          </p>
          <p>
            Sur vos documents d’assurance – généralement sur votre carte ou
            police d’assurance.
          </p>
        </div>
        <div className={open ? "simulation-info-blur" : "simulation-info"}>
          <div>
            <img src={contenthome} className="content-home" />
          </div>
          <div className="p-4">
            <span className="h4">Simulation en ligne</span>
            <hr className="horizontal-line" />
          </div>

          <div className="p-3">
            <div className="row p-2">
              <span className="h6">
                Remplissez votre numero de chassis
                <i
                  className="fa fa-info info-icon"
                  onClick={handleClick}
                  aria-hidden="true"
                >
                  {" "}
                </i>
              </span>
              <div className="p-2">
                <input
                  className="form-control vehicleText"
                  type="text"
                  placeholder="ABCDEFG1234567890"
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div style={{ float: "right", borderRadius: "4px" }}>
            <div className="p-2">
              <button disabled={!value} type="button" className="btn btn-sm">
                Suivant
              </button>
            </div>
            <div className="p-2">
              <button type="button" className="btn btn-sm">
                Sans numero de chassis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VehicleSimulation;
