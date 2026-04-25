import "./App.css";
import { Route, Routes } from "react-router-dom";
import Infofood from "./Infofood";
import Home from "./Home";
import Header1 from "./assets/Header1";
import Footer1 from "./assets/Footer1";
import Header_pic from "./assets/Header_Pic.jpg";

function App() {
  return (
    <>
      {/* Container for the background image banner */}
      <div
        className="main-banner"
        style={{
          backgroundImage: `url(${Header_pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "rgb(17, 17, 16)",
          fontStyle: "italic",
          width: "100%",          // Changed from 200%
          marginLeft: "0",        // Changed from 8%
          padding: "40px 0",      // Gives the banner some height
          textAlign: "center",
        }}
      >
        <Header1 />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mealid" element={<Infofood />} />
      </Routes>
      
      <Footer1 />
    </>
  );
}

export default App;
