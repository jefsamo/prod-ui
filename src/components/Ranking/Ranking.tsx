import React from "react";
import AttributeCard from "../AttributesCard/AttributeCard";
import "./ranking.scss";
import Img from "./svg/img.png";

const Ranking = () => {
  return (
    <div className="ranking">
      <div className="left-content">
        <div className="content-container">
          <div className="input-content">
            <span>ID</span>
            <input type="text" placeholder="123" />
          </div>
          <div className="input-content">
            <span>Rank</span>
            <input type="text" placeholder="1923" />
          </div>
        </div>
        <div className="img-container">
          <img src={Img} alt="" />
        </div>
      </div>
      <div className="right-content">
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
        <AttributeCard />
      </div>
    </div>
  );
};

export default Ranking;
