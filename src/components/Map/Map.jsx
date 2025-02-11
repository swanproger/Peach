import map from "./map.svg";
import allCities from "./regions/Cities.svg";
import Dalvostok from "./regions/Dalvostok.svg";
import Moscow from "./regions/Moscow.svg";
import Severozapad from "./regions/Severozapad.svg";
import Sibir from "./regions/Sibir.svg";
import Ug from "./regions/Ug.svg";
import Ural from "./regions/Ural.svg";
import Volga from "./regions/Volga.svg";
import "./Map.scss";
import { cities } from "./cities";
import EnterSpan from "./button";
import { useState } from "react";

export default function Map() {
  const [region, setRegion] = useState("all");
  function enterSpan(e) {
    setRegion(e.target.id);
  }
  return (
    <div className="container">
      <div className="map__header">
        <span className="header__title">Офисы Softline</span>
        <div className="header__cities">
          <span
            onClick={(e) => {
              enterSpan(e);
            }}
            id="all"
            className={
              "all" === region
                ? "header__cities__button active"
                : "header__cities__button"
            }
          >
            Все
          </span>
          {cities.citie.map((item, index) => (
            <EnterSpan
              key={index}
              id={index}
              isActive={index}
              setSpan={region}
              onClick={(e) => {
                enterSpan(e);
              }}
            >
              {item}
            </EnterSpan>
          ))}
        </div>
      </div>
      <div className="map__container">
        <img className="map" src={map} alt="map"></img>
        <img
          className="allСities"
          src={allCities}
          alt=""
          style={{
            display: region == "all" ? "block" : "none",
          }}
        ></img>
        <img
          className="region dalvostok"
          src={Dalvostok}
          alt=""
          style={{
            display: region == 7 ? "block" : "none",
          }}
        ></img>
        <img
          className="region moscow"
          src={Moscow}
          alt=""
          style={{
            display: region == 0 ? "block" : "none",
          }}
        ></img>
        <img
          className="region severozapad"
          src={Severozapad}
          alt=""
          style={{
            display: region == 2 ? "block" : "none",
          }}
        ></img>
        <img
          className="region sibir"
          src={Sibir}
          alt=""
          style={{
            display: region == 6 ? "block" : "none",
          }}
        ></img>
        <img
          className="region ug"
          src={Ug}
          alt=""
          style={{
            display: region == 3 ? "block" : "none",
          }}
        ></img>
        <img
          className="region ural"
          src={Ural}
          alt=""
          style={{
            display: region == 5 ? "block" : "none",
          }}
        ></img>
        <img
          className="region volga"
          src={Volga}
          alt=""
          style={{
            display: region == 4 ? "block" : "none",
          }}
        ></img>
      </div>
    </div>
  );
}
