import React, { useState } from "react";
import "./phase4.css";

function Phase4() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="landing-115">
     {/* <img
        class="incuwise-logo-final-14"
        alt=""
        src="incuwise-logo-final-11@2x.png"
      />

      <div class="contact4" id="contactText">Contact</div> */}
      <i className="got-an-idea1">GOT AN IDEA?</i>
      <div
        className={`lets-talk1 ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Let’s Talk
      </div>
      {isHovered && (
        <img
          src="line3.png"
          alt="Your Image"
          style={{ marginLeft: "38rem", marginBottom: "-21.5rem",color:"white",}}
        />
      )}
      <div className="landing-115-child"></div>
    </div>
  );
}

export default Phase4;
