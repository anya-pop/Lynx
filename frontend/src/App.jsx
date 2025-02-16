import { useState } from "react";
import lynx1 from "./assets/lynx1.png";
import lynx2 from "./assets/lynx2.png";
import lynx3 from "./assets/lynx3.png";
import metallic from "./assets/metallic.png";
import lynxIcon from "./assets/lynx.png";
import lynxImage from "./assets/lynx-image.png";
import netImage from "./assets/net.png";
import starDoodle from "./assets/star-doodle.png";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
  });

  const [lynxCount, setLynxCount] = useState("..."); // Placeholder for backend data

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* Section 3: Empty Scroll */}
      <div className="scroll-section" style={{ backgroundColor: "#444" }}></div>

      {/* Section 4: Backend Data Placeholder */}
      <div className="scroll-section" style={{ backgroundColor: "#333" }}></div>
    </div>
  );
};

export default App;
