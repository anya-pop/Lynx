import { useState, useEffect } from "react";
import lynx1 from "./assets/lynx1.png";
import lynx2 from "./assets/lynx2.png";
import lynx3 from "./assets/lynx3.png";
import metallic from "./assets/metallic.png";
import lynxIcon from "./assets/lynx.png";

const App = () => {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Section 1: Homepage */}
      <div className="homepage">
        {/* Background LYNX Images */}
        <img src={lynx1} alt="Lynx 1" className="lynx-bg lynx1" />
        <img src={lynx2} alt="Lynx 2" className="lynx-bg lynx2" />
        <img src={lynx3} alt="Lynx 3" className="lynx-bg lynx3" />

        {/* Metallic Scribble */}
        <img src={metallic} alt="Metallic" className="metallic" />

        {/* Lynx Icon on the Right */}
        <img src={lynxIcon} alt="Lynx Icon" className="lynx-icon" />

        {/* Main Content */}
        <div className="homepage-text">
          <h1>Learn about your data with us.</h1>
          <button className="get-started-btn">Get Started Now</button>
        </div>
      </div>

      {/* Section 2: Input Page */}
      <div className="scroll-section" style={{ backgroundColor: "#555" }}></div>

      {/* Section 3: Empty Scroll */}
      <div className="scroll-section" style={{ backgroundColor: "#444" }}></div>

      {/* Section 4: Backend Data Placeholder */}
      <div className="scroll-section" style={{ backgroundColor: "#333" }}></div>
    </div>
  );
};

export default App;
