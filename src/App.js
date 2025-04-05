import "./styles.css";
import { useRef } from "react";

const Lighthouse = () => {
  const lightBeamRef = useRef(null);
  function handleMouseMove(e) {
    const lightCenter = document.querySelector(".light-point");
    const rect = lightCenter.getBoundingClientRect();
    const originX = rect.left;
    const originY = rect.top;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const dx = cursorX - originX;
    const dy = cursorY - originY;

    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    lightBeamRef.current.style.transform = `rotate(${angle}deg)`;
    lightBeamRef.current.style.transformOrigin = "0% 50%";
  }

  return (
    <>
      <div
        className="lighthouse-back bg-stone-700 w-screen h-screen flex items-center relative"
        onMouseMove={(e) => handleMouseMove(e)}
        style={{
          background:
            "linear-gradient(180deg, rgba(0,46,85,1) 37%, rgba(0,0,0,1) 98%)",
        }}
      >
        <div className="relative">
          <img
            src="lighthouse.svg"
            alt="lighthouse"
            className="w-40"
            // style={{ width: "100px" }}
          />
          <div
            className="light-content absolute flex items-center"
            style={{ top: "3%", left: "30%" }}
          >
            <div className="light-point h-4 w-4 rounded-full z-10"></div>
            <div
              ref={lightBeamRef}
              className="light-beam w-screen"
              style={{
                height: "100px",
                clipPath: "polygon(0 45%, 100% 0, 100% 100%, 0 55%)",
                transformOrigin: "0% 50%",
                background:
                  "linear-gradient(90deg, rgba(255,254,0,1) 0%, rgba(255,255,255,0.5) 100%)",
                transition: "transform 0.05s ease-out",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Lighthouse />
    </div>
  );
}
