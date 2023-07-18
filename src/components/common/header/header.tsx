import "./header.css";
import { headerlogo, nngroup } from "../../../assets/images";

const Header = () => {
  return (
    // <div className="container w-50">
    <div className="container mx-auto" style={{ width: "500px" }}>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
          <img
            src={headerlogo}
            alt="Bootstrap"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </a>
        <div className="my-2 my-2 my-sm-0 text-end">
          <span className="h4 row d-inline">Courtier en assurance</span>
          <div className="row">
            <div className="col">
              <span>supporte par</span>
              <img
                src={nngroup}
                alt="Bootstrap"
                width="50"
                height="30"
                className="align-top"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
