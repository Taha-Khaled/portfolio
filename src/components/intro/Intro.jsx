import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const spanRef = useRef();
  useEffect(() => {
    init(spanRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Reactjs Developer.",
        "Software Engineer.",
        "javaScript Developer.",
        "Frontend Engineer.",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Taha Khaled</h1>
          <h3>
            Freelance <span ref={spanRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
