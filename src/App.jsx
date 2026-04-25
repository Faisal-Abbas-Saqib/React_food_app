import "./App.css";
import { Route, Routes } from "react-router-dom";
import Infofood from "./Infofood";
import Home from "./Home";
import Header1 from "./assets/Header1";
import Footer1 from "./assets/Footer1";
import Header_pic from "./assets/Header_Pic.jpg";

function App() {
  return (
    <div className="app-container"> {/* New wrapper to center everything */}
      <div
        className="banner-wrapper"
        style={{
          backgroundImage: `url(${Header_pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "rgb(17, 17, 16)",
          fontStyle: "italic",
          width: "100%",          
          padding: "60px 0",      
          textAlign: "center",
        }}
      >
        <Header1 />
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
