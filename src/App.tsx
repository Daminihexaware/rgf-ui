import Home from "./components/home/home";
import Header from "./components/common/header/header";
import Dashboard from "./components/dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.css";
import Details from './components/Details/details';
import { Routes, Route } from "react-router-dom";

import { RouteLinks } from "./constants";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={RouteLinks.home} element={<Home />} />
        <Route path={RouteLinks.dashboard} element={<Dashboard />} />
      </Routes>
    </div>
  );
};
export default App;
