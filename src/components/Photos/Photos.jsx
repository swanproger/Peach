import "./Photos.scss";
import leftImg from "./left.svg";
import rightImg from "./right.svg";
import slide1 from "./images/Слайд1.png";
import slide2 from "./images/Слайд2.png";
import slide3 from "./images/Слайд3.png";
import slide4 from "./images/Слайд4.png";
import slide5 from "./images/Слайд5.png";
import SrollLine from "./ScollLine";
import { useState, useEffect } from "react";

export default function Photos() {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    setSlider(slider + 1);
  }, []);

  function slide(e) {
    if ((e.target.id === "left" || e.target.id === "leftIgm") && slider >= 2) {
      scroll(-100);
      setSlider(slider - 1);
    } else {
      if (
        (e.target.id === "right" || e.target.id === "rightIgm") &&
        slider < 5
      ) {
        scroll(100);
        setSlider(slider + 1);
      }
    }
  }

  function scroll(val) {
    document.querySelector("ul").scrollBy({
      left: val,
      right: val,
      behavior: "smooth",
    });
  }
  return (
    <div className="photos-container">
      <div className="photos">
        <div className="photos__header">
          <span className="photos__title">Корпоративная жизнь</span>
          <div className="buttons-container">
            <div
              className="photos__button"
              id="left"
              onClick={(e) => {
                slide(e);
              }}
            >
              <img
                src={leftImg}
                alt="left button"
                className="photos__button__arrow"
                id="leftIgm"
                onClick={(e) => {
                  slide(e);
                }}
              ></img>
            </div>
            <div
              className="photos__button"
              id="right"
              onClick={(e) => {
                slide(e);
              }}
            >
              <img
                src={rightImg}
                alt="right button"
                className="photos__button__arrow"
                id="rightIgm"
                onClick={(e) => {
                  slide(e);
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className="gallerybox">
          <ul>
            <li>
              <img src={slide1} alt="photo"></img>
            </li>
            <li>
              <img src={slide2} alt="photo"></img>
            </li>
            <li>
              <img src={slide3} alt="photo"></img>
            </li>
            <li>
              <img src={slide4} alt="photo"></img>
            </li>
            <li>
              <img src={slide5} alt="photo"></img>
            </li>
          </ul>
        </div>
        <div className="scroll-bar">
          <SrollLine
            style={{
              backgroundColor: slider === 1 ? "#A30C33" : null,
            }}
          ></SrollLine>
          <SrollLine
            style={{
              backgroundColor: slider === 2 ? "#A30C33" : null,
            }}
          ></SrollLine>
          <SrollLine
            style={{
              backgroundColor: slider === 3 ? "#A30C33" : null,
            }}
          ></SrollLine>
          <SrollLine
            style={{
              backgroundColor: slider === 4 ? "#A30C33" : null,
            }}
          ></SrollLine>
          <SrollLine
            style={{
              backgroundColor: slider === 5 ? "#A30C33" : null,
            }}
          ></SrollLine>
        </div>
      </div>
    </div>
  );
}
