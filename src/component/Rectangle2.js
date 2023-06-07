import React, { useRef, useEffect, useState } from "react";
import "./dev.css";

function Rectangle2() {
  const divRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxScroll = 600;
    const minHeight = 80;
    const maxHeight = 500;

    const height =
      scrollPosition >= maxScroll
        ? minHeight
        : minHeight +
          ((scrollPosition / maxScroll) * (maxHeight - minHeight));

    divRef.current.style.height = `${height}px`;
  }, [scrollPosition]);

  return (
   <div className="landing-97">
       <img
        className="landing-97-child"
        alt=""
        src="rectangle-11@2x.png"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="we-market-your4"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: scrollPosition >= 600 ? "-100px" : "10px",
          transition: "margin-top 0.5s ease",
        }}
      >
        WE MARKET YOUR PRODUCT
      </div>
      <div
        className="if-an-investment4"
        style={{
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        If an investment and a technical team wasnʼt enough, we also give you a
        full stack digital marketing team consisting of social media experts,
        graphic designers, PR consultants and anything else you could possibly
        need to get the word out there about your product.
      </div>
      <div className="rectangle-parent16">
        <div
          className="group-child36"
          style={{ left: "-12rem", marginTop: "-4rem", height: "500px" }}
        ></div>
        <div
          className="group-child37"
          style={{
            left: "-12rem",
            marginTop: "-4rem",
            height: `${scrollPosition * 0.65}px`,
            transition: "height 0.5s ease",
          }}
          ref={divRef}
        ></div>
      </div>
    </div>
  );
}

export default Rectangle2;
