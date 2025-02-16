import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";


import springy from "./assets/springy.png";
import glassBackground from "./assets/glass-background.png";

ChartJS.register(ArcElement, Tooltip, Legend);

import lynx1 from "./assets/lynx1.png";
import lynx2 from "./assets/lynx2.png";
import lynx3 from "./assets/lynx3.png";
import metallic from "./assets/metallic.png";
import lynxIcon from "./assets/lynx.png";
import lynxImage from "./assets/lynx-image.png";
import netImage from "./assets/net.png";
import starDoodle from "./assets/star-doodle.png";

import image29 from "./assets/29.png"; // Top left image
import metalAsset from "./assets/metal-asset.png"; // Bottom right image

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
  });
  const [data, setData] = useState({
    positive: 65,
    neutral: 25,
    negative: 10,
  });
  
  const pieData = {
    labels: ["Positive Mentions", "Neutral Mentions", "Negative Mentions"],
    datasets: [
      {
        data: [data.positive, data.neutral, data.negative],
        backgroundColor: ["#c4c4c4", "#777", "#222"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  
  const [lynxCount, setLynxCount] = useState("..."); // Placeholder for backend data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [dataBreaches, setDataBreaches] = useState("...");

  const [highPriorityText, setHighPriorityText] = useState("Loading high priority recommendations...");
  const [mediumPriorityText, setMediumPriorityText] = useState("Loading medium priority recommendations...");


  return (
    <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Section 1: Homepage (UNCHANGED) */}
      <div className="homepage">
        <img src={lynx1} alt="Lynx 1" className="lynx-bg lynx1" />
        <img src={lynx2} alt="Lynx 2" className="lynx-bg lynx2" />
        <img src={lynx3} alt="Lynx 3" className="lynx-bg lynx3" />
        <img src={metallic} alt="Metallic" className="metallic" />
        <img src={lynxIcon} alt="Lynx Icon" className="lynx-icon" />

        <div className="homepage-text">
          <h1>Learn about your data with us.</h1>
          <button className="get-started-btn">Get Started Now</button>
        </div>
      </div>

      {/* Section 2: Input Page (New Scroll Section) */}
      <div className="scroll-section input-page">
        <div className="quote-section">
          <p>
            “See what the internet knows about you, before someone else does.”
            <br />
            <strong>– The LYNX Team</strong>
          </p>
        </div>


        <div className="divider"></div>
        <div className="input-section">
          <h2>Look for...</h2>
          <form>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="username" placeholder="Usernames" value={formData.username} onChange={handleChange} />
            <p className="input-helper">Optional but improves accuracy</p>
            <button type="submit" className="view-data-btn">View your data</button>
          </form>
          <img src={lynxImage} alt="Lynx Logo" className="lynx-input-logo" />
        </div>
      </div>

              {/* This is spotted section */}
              <div className="scroll-section spotted-section">
        <img src={netImage} alt="Net Background" className="net-bg" />
        <img src={starDoodle} alt="Star Doodle" className="star-doodle" />
        <div className="spotted-box">
          <p>You have been spotted on</p>
          <h1>{lynxCount} LYNX</h1>
          <p>on the internet</p>
        </div>
      </div>

      {/* Section 3: "Some of your finds..." */}
  <div className="scroll-section finds-section">
  <h2 className="finds-title">Some of your finds...</h2>

{/* Three Stacked Grey Boxes */}
<div className="grey-boxes">
  <div className="grey-box">Random Stuff 1</div>
  <div className="grey-box">Random Stuff 2</div>
  <div className="grey-box">Random Stuff 3</div>
</div>

{/* Top Left & Bottom Right Images */}
<img src={image29} alt="Asset 29" className="finds-image top-left" />
<img src={metalAsset} alt="Metal Asset" className="finds-image bottom-right" />
</div>
{/* NEW Section: Breaking It Down */}
<div className="scroll-section breakdown-section">
  {/* Background Decorations */}
  <img src={springy} alt="Springy Background" className="spring-bg" />

  {/* Pie Chart on the Left */}
  <div className="pie-chart-container">
    <Pie data={pieData} />
  </div>

  {/* Text Breakdown on the Right */}
  <div className="breakdown-box">
    <img src={glassBackground} alt="Glass Background" className="glass-bg" />
    <div className="breakdown-text">
      <h2>Breaking it down...</h2>
      <p><strong>{data.positive}% Positive Mentions</strong><br />Professional highlights, social engagement, good reviews</p>
      <p><strong>{data.neutral}% Neutral Mentions</strong><br />Basic profile links, general discussions</p>
      <p><strong>{data.negative}% Negative Mentions</strong><br />Bad reviews, leaked data, questionable content</p>
    </div>
  </div>
</div>

{/* NEW Section: Data Breaches */}
<div className="scroll-section data-breach-section">
  <h2>Data Breaches... Uh oh...</h2>
  <p>Your data has been breached <strong>{dataBreaches}</strong> time(s)</p>
</div>

{/* NEW Section: Based on Our Analysis */}
<div className="scroll-section analysis-section">
  <h2>Based on our Analysis,</h2>
  <h3>We recommend...</h3>

  {/* Priority Recommendations */}
  <div className="recommendations">
    <div className="high-priority">
      <h4>🚨 High Priority</h4>
      <p>{highPriorityText}</p>
    </div>

    <div className="medium-priority">
      <h4>⚠️ Medium Priority</h4>
      <p>{mediumPriorityText}</p>
    </div>
  </div>

  {/* Back to Home Button */}
  <button className="home-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    Go Back Home
  </button>
</div>


      {/* Section 4: Backend Data Placeholder */}
      <div className="scroll-section" style={{ backgroundColor: "#333" }}></div>
    </div>


  );
};

export default App;
