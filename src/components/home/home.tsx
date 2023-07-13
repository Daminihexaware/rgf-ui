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
        <div className="d-flex justify-content-center p-5 mr-2">
          <a href="#dashboard" className="nav-link text-white">
            <img
              src={assurance_auto}
              // width="200"
              // height="200"
              className="image-size col-md-6"
            />
          </a>
          <a href="#" className="nav-link text-white">
            <img
              src={habitation}
              // width="300"
              // height="500"
              className="image-size col-md-6 offset-md-2"
              offset-md-1
            />
          </a>
        </div>

        {/* <div className="col-md-3 d-flex justify-content-center p-5">
          <a href="#" className="nav-link px-2 link-dark">
            <img src={assurance_auto} height="200" />
          </a>
          <a href="#" className="nav-link px-2 link-dark">
            <img src={habitation} height="200" />
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
