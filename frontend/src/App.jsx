import { useState } from "react";
import lynx1 from "./assets/lynx1.png";
import lynx2 from "./assets/lynx2.png";
import lynx3 from "./assets/lynx3.png";
import metallic from "./assets/metallic.png";
import lynxIcon from "./assets/lynx.png";
import lynxImage from "./assets/lynx-image.png"; // Image under input

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Section 1: Homepage (UNCHANGED) */}
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

      {/* Section 2: Input Page (New Scroll Section) */}
      <div className="scroll-section input-page">
        {/* Left Side: Quote */}
        <div className="quote-section">
          <p>
            “See what the internet knows about you, before someone else does.”
            <br />
            <strong>– The LYNX Team</strong>
          </p>
        </div>

        {/* Vertical Line Separator */}
        <div className="divider"></div>

        {/* Right Side: Input Form */}
        <div className="input-section">
          <h2>Look for...</h2>
          <form>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="username" placeholder="Usernames" value={formData.username} onChange={handleChange} />
            <p className="input-helper">Optional but improves accuracy</p>
            <button type="submit" className="view-data-btn">View your data</button>
          </form>

          {/* Lynx Logo Under Input */}
          <img src={lynxImage} alt="Lynx Logo" className="lynx-input-logo" />
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
