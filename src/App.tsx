import Home from "./components/home/home";
import Header from "./components/common/header/header";
import Dashboard from "./components/dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

import { RouteLinks } from "./constants";
import Index from "./components/vehicle-habitation";
import VehicleSimulation from "./components/vehicle-simulation";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={RouteLinks.home} element={<Home />} />
        <Route path={RouteLinks.dashboard} element={<Dashboard />} />
        <Route path={RouteLinks.vehiclehabitation} element={<Index />} />
        <Route path={RouteLinks.vehiclesimulation} element={<VehicleSimulation />} />
      </Routes>
    </div>
  );
};
export default App;
