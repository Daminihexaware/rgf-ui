import "./home.css";
import { contenthome, assurance_auto, habitation } from "../../assets/images";

const Home = () => {
  return (
    <div>
      <div>
        <img src={contenthome} className="content-home" />
      </div>
      <div className="p-5">
        <span className="h3">compose your insurance online</span>
      </div>

      <div className="controls p-4">
        <div className="row text-white p-2">
          <span className="h4">
            Cliquez sur votre assurance pour simuler votre prime
          </span>
        </div>
        <div className="row d-flex justify-content-center p-5">
          <img src={assurance_auto} height="200" className="col-2" />
          <img src={habitation} height="200" className="col-2" />
        </div>
      </div>
    </div>
  );
};
export default Home;
