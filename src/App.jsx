import "./App.css";
import { Route, Routes } from "react-router-dom";
import Infofood from "./Infofood";
import Home from "./Home";
import Header1 from "./assets/Header1";
import Footer1 from "./assets/Footer1";
import Header_pic from "./assets/Header_Pic.jpg";

function App() {
  return (
    <div className="app-container">
      <div
        className="banner-wrapper"
        style={{ backgroundImage: `url(${Header_pic})` }}
      >
        <div className="banner-overlay">
          <Header1 />
        </div>
      </div>
      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mealid" element={<Infofood />} />
        </Routes>
      </main>
      <Footer1 />
    </div>
  );
}

export default App;
