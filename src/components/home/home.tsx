import "./home.css";
import { contenthome, assurance_auto, habitation } from "../../assets/images";

const Home = () => {
  return (
    <div className="container mx-auto" style={{ width: "500px" }}>
      <div className="row d-flex justify-content-center">
        <img
          src={contenthome}
          sizes="(max-width: 380px) 300px, (max-width: 450px) 450px, (max-width: 1000px) 600px"
          alt="Responsive Image"
        />

        <div className="p-5">
          <span className="h4">
            Compose your insurance online
            <hr className="horizontal-line" />
          </span>
        </div>

        <div className="controls p-4">
          <div className="row text-white p-2">
            <span className="h6">
              Click on your insurance to simulate your premium
            </span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a href="habitation" className="nav-link text-white">
              <img
                src={assurance_auto}
                sizes="(max-width: 380px) 300px, (max-width: 450px) 450px, (max-width: 1000px) 600px"
                className="image-size col-md-6"
              />
            </a>
            <a href="/dashboard" className="nav-link text-white">
              <img
                src={habitation}
                className="image-size col-md-6 offset-md-2"
                sizes="(max-width: 380px) 300px, (max-width: 450px) 450px, (max-width: 1000px) 600px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
