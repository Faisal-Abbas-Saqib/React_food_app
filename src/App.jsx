import "./App.css";
import { Route, Routes } from "react-router-dom";
import Infofood from "./Infofood";
import Home from "./Home";
import Header1 from "./assets/Header1";
import Footer1 from "./assets/Footer1";

function App() {
  return (
    <>
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mealid" element={<Infofood />} />
      </Routes>
      <Footer1 />
    </>
  );
}

export default App;
