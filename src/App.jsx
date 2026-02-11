import "./App.css";
import { Route, Routes } from "react-router-dom";
import Infofood from "./Infofood";
import Home from "./Home";
import Header1 from "./assets/Header1";
import Footer1 from "./assets/Footer1";
import Header_pic from "./assets/Header_pic.jpg";

function App() {
  return (
    <>
      {/* 2. Apply the background image to a container or pass it to Header1 */}
      <div
        style={{
          backgroundImage: `url(${Header_pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "8%",
          color: "rgb(17, 17, 16)",
          fontSize: "x-large",
          fontStyle: "italic",
          width: "200%",
          textAlign: "left",
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
