import React, { useEffect, useRef, useState } from "react";

function App() {
  const heroRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIncuwise, setShowIncuwise] = useState(true);
  const [showDiv, setShowDiv] = useState(false);
  const [divSize, setDivSize] = useState({ width: "40px", height: "40px" });
  const [showImage, setShowImage] = useState(false);

  function handleScroll() {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentWidth = parseInt(heroRef.current.style.width.replace("%", ""));
    const percentDecrease = scrollPosition / 10;
    const newWidth = currentWidth - percentDecrease;

    heroRef.current.style.width = `${Math.max(newWidth, 50)}%`;

    if (scrollPosition > 600) {
      const newHeight = Math.max(newWidth, 50);
      heroRef.current.style.height = `${newHeight}vh`;
    } else {
      heroRef.current.style.height = "100vh";
    }

    if (scrollPosition < 20) {
      setDisplayText("WE");
    } else if (scrollPosition >= 20 && scrollPosition <= 600) {
      setDisplayText("ARE");
    } else if (scrollPosition >= 600) {
      setDisplayText("INCUWISE");
    }

    if (scrollPosition === 0) {
      heroRef.current.style.background = "#1d428a";
      heroRef.current.style.width = "100%";
      heroRef.current.style.height = "100vh";
    } else {
      heroRef.current.style.background = "#1d428a";
    }

    if (scrollPosition > 800) {
      setShowIncuwise(false);
      heroRef.current.style.background = "#1d428a";
      heroRef.current.style.width = "0";
      heroRef.current.style.height = "0";
    } else {
      setShowIncuwise(true);
    }

    if (scrollPosition >= 820) {
      setShowDiv(true);
      const newWidth = (scrollPosition - 820) * 2;
      const newHeight = (scrollPosition - 820) * 2;
      setDivSize({ width: `${newWidth}px`, height: `${newHeight}px` });
    } else {
      setShowDiv(false);
      setDivSize({ width: "40px", height: "40px" });
    }

    if (scrollPosition >= 1080 ) {
      setShowImage(true);
    } else {
      setShowImage(false);
    }
  }, [scrollPosition, divSize]);

  return (
    <>
      <div className="container">
        <div className="nav-menu">
          <img className="nav-logo" src="incuwise-logo-final-11@2x.png" alt="" />
          <div className="nav-menu-items">Contact</div>
        </div>
        <div
          className="hero-primary"
          ref={heroRef}
          style={{
            width: "100%",
            height: "100vh",
            inset: "0",
            background: "#1d428a",
            transition: "background-color 0.3s, width 0.3s, height 0.3s",
          }}
        >
          <div className="hero-content">
            {displayText === "WE" && <span className="we-text">WE</span>}
            {displayText === "ARE" && <span className="are-text">ARE</span>}
            {displayText === "INCUWISE" && showIncuwise && (
              <span className="incuwise-text">INCUWISE</span>
            )}
          </div>
        </div>
        {showDiv && (
          <div
            className="additional-div"
            style={{
              width: divSize.width,
              height: divSize.height,
              border: "2px solid #1d428a",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
           

            {showImage && (
              <div>
                <img src="rectangle-12@2x.png" alt="ravi" style={{width:'100%',height:"100%"}} />
               
                <div className="invest"> WE INVEST IN YOUR IDEAS</div>
                <div class="addition">
                Incuwise invests in your vision, we step in at perhaps the most
        important stage of a startup and financially support you by funding your
        pre-seed, pre-product idea, giving your dreams an adrenaline shot in the
        arm.
            </div>
            <div className="scroll"></div>
              </div>
              
            )}
           
           
          </div>
        )}
      </div>
      
    </>
  );
}

export default App;
