import React, { useEffect, useRef, useState } from "react";
import Rectangle1 from "./component/Rectangle1";
import Rectangle2 from "./component/Rectangle2";
import Rectangle3 from "./component/Rectangle3";
import Rectangle4 from "./component/Rectangle4";
import Phase3 from "./component/Phase3";
import Phase4 from "./component/Phase4";


const PHASE_1 = 300;
const PHASE_2 = 1000;
const PHASE_3 = 1300;

function App() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const [displayText, setDisplayText] = useState("WE");
  const [showImage, setShowImage] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  const [phases, setPhases] = useState([
    { component: Rectangle1, show: false },
    { component: Rectangle2, show: false },
    { component: Rectangle3, show: false },
    { component: Rectangle4, show: false },
    { component: Phase3, show: false },
    { component: Phase4, show: false },
  ]);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const currentWidth = parseInt(heroRef.current.style.width.replace("%", ""));
    console.log(currentWidth);
    const currentHeight = parseInt(
      heroRef.current.style.height.replace("vh", "")
    );

    if (scrollPosition > 0) {
      const percentDecrease = scrollPosition / 10;
      const newWidth = currentWidth - percentDecrease;
      if (scrollPosition < PHASE_1) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
      if (scrollPosition <= PHASE_1) {
        if (scrollPosition < 100) {
          setDisplayText("we");
        }
        if (scrollPosition > 80 && scrollPosition < 200) {
          heroRef.current.style.width = `${Math.max(newWidth, 75)}%`;
          heroRef.current.style.height = `100vh`;
          setDisplayText("are");
        }
        if (scrollPosition >= 200) {
          const newHeight = Math.max(newWidth, 78);
          heroRef.current.style.width = `${Math.max(newWidth, 75)}%`;
          heroRef.current.style.height = `${newHeight}vh`;
          
          setDisplayText("incuwise");
        }
      }

      // ----------------------------------------------- PHASE 1 ENDS -----------------------------------------------

      if (scrollPosition > PHASE_1 && scrollPosition <= PHASE_2) {
        if (displayText.length > 0) {
          setDisplayText("");
        }

        if (heroRef.current.style.background !== "none") {
          heroRef.current.style.background = "none";
        }

        if (scrollPosition <= PHASE_2 / 2) {
          heroRef.current.style.width = `${
            currentWidth - scrollPosition * 0.1
          }px`;
          heroRef.current.style.height = `${
            currentWidth - scrollPosition * 0.1
          }px`;
        }

        if (scrollPosition > PHASE_2 / 2) {
          if (currentWidth <= 500) {
            heroRef.current.style.width = `${
              currentWidth + scrollPosition * 0.06
            }px`;
            heroRef.current.style.height = `${
              currentWidth + scrollPosition * 0.06
            }px`;
          }
          if (scrollPosition > 550) {
            setShowImage(true);
          } else {
            setShowImage(false);
          }
          if (scrollPosition > 700) {
            setShowImage(false);
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 0 ? { ...phase, show: true } : phase
              )
            );
          }else{
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 0 ? { ...phase, show: false } : phase
              )
            );
          }
          if (scrollPosition > 880) {
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 0 ? { ...phase, show: false } : phase
              )
            );
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 1 ? { ...phase, show: true } : phase
              )
            );
          }else{
            setPhases((prevPhases) =>
            prevPhases.map((phase, index) =>
              index === 1 ? { ...phase, show: false } : phase
            )
          );
          }
          if (scrollPosition > 930) {
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 1 ? { ...phase, show: false } : phase
              )
            );
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 2 ? { ...phase, show: true } : phase
              )
            );
          }else{
            setPhases((prevPhases) =>
            prevPhases.map((phase, index) =>
              index === 2 ? { ...phase, show: false } : phase
            )
          );
          }
          if (scrollPosition > 980) {
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 2 ? { ...phase, show: false } : phase
              )
            );
            setPhases((prevPhases) =>
              prevPhases.map((phase, index) =>
                index === 3 ? { ...phase, show: true } : phase
              )
            );
          }else{
            setPhases((prevPhases) =>
            prevPhases.map((phase, index) =>
              index === 3 ? { ...phase, show: false } : phase
            )
          );
          }
        }
      }
      // ----------------------------------------------- PHASE 2 ENDS -----------------------------------------------
      if (scrollPosition > PHASE_2 && scrollPosition <= PHASE_3) {
        if (scrollPosition > 1040) {
          setPhases((prevPhases) =>
            prevPhases.map((phase, index) =>
              index === 3 ? { ...phase, show: false } : phase
            )
          );
          setPhases((prevPhases) =>
            prevPhases.map((phase, index) =>
              index === 4 ? { ...phase, show: true } : phase
            )
          );
        }else{
          setPhases((prevPhases) =>
          prevPhases.map((phase, index) =>
            index === 4 ? { ...phase, show: false } : phase
          )
        );
        }
        heroRef.current.style.border = "none";
      }
      if (scrollPosition > PHASE_3) {
        if(scrollPosition>1080){
        setPhases((prevPhases) =>
          prevPhases.map((phase, index) =>
            index === 4 ? { ...phase, show: false } : phase
          )
        );
        setPhases((prevPhases) =>
          prevPhases.map((phase, index) =>
            index === 5 ? { ...phase, show: true } : phase
          )
        );
      }
    }
    } else {
      heroRef.current.style.background = "#1d428a";
      heroRef.current.style.width = "100%";
      heroRef.current.style.height = "100vh";
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container" ref={navRef}>
        <div className="nav-menu">
          <img
            className="nav-logo"
            src="incuwise-logo-final-11@2x.png"
            alt=""
          />
          <div className="nav-menu-items">Contact</div>
        </div>
        <div
          className="hero-primary"
          ref={heroRef}
          style={{
            width: "100%",
            height: "100vh",
            inset: "0",
            fontFamily: "Poppins",
            border: "2px solid #1d428a",
            backgroundColor: showBackground ? "#1d428a" : "transparent",
          }}
        >
          <div className="hero-content">
            <span className="hero-text">{displayText}</span>
          </div>

          {showImage && (
            <div>
              <img
                className="img"
                src="rectangle-12@2x.png"
                alt="ravi"
                style={{ width: "100%", height: "100%" }}
              />

              <div
                className="invest"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                WE INVEST IN YOUR IDEAS
              </div>
              <div
                className="addition"
                style={{ marginTop: "14px", width: "90rem" }}
              >
                Incuwise invests in your vision, we step in at perhaps the most
                important stage of a startup and financially support you by
                funding your pre-seed, pre-product idea, giving your dreams an
                adrenaline shot in the arm.
              </div>
              <div className="scroll"></div>
            </div>
          )}

          {phases.map((phase, index) =>
            phase.show ? (
              <phase.component
                key={index}
                style={{ width: "100%", height: "100vh" }}
              />
            ) : null
          )}
        </div>
      </div>
     
    </>
  );
}

export default App;
