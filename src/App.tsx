import Home from "./components/home/home";
import Header from "./components/common/header/header";
import "bootstrap/dist/css/bootstrap.css";
import Details from './components/Details/details';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Home />; */}
      <Details />
    </div>
  );
};
export default App;
