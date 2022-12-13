import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import routing, { RoutesArr } from "./component/routes/Index";
import Navbar from "./component/navbar/Index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>{routing(RoutesArr)}</Routes>
    </div>
  );
}

export default App;
