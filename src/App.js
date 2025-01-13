import React from "react";
import Topbanner from "./components/Topbanner";
import Menubar from "./components/Menubar";
import Maincontent from "./components/Maincontent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbanner />
      <Menubar /> {/* Only here should you render Menubar with the buttons */}
      <div className="main-content-wrapper">
        <Maincontent />
        <div className="info-boxes">
          <div className="info-box">Community Description</div>
          <div className="info-box">Rules</div>
          <div className="info-box">Mods</div>
        </div>
      </div>
    </div>
  );
}

export default App;
