import Navbar from "../../components/Navbar/Navbar";
import "./styleYourself.scss";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../components/Avatar/Avatar";
import { KicksData, Kick, KicksAvatar } from "../../kicks";
import { ShirtsData, Shirt, ShirtsAvatar } from "../../shirts";
import { PantsData, Pant, PantsAvatar } from "../../pants";
import { HeadData, Head, HeadAvatar } from "../../headwear";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Base from "./svg/base.png";

const StyleYourself = () => {
  const [state, setState] = useState({
    headwear: false,
    pants: false,
    shirts: true,
    kicks: false,
    accessories: false,
  });

  const [headwears] = useState<Head[] | []>(HeadAvatar);
  const [headwearsData] = useState<Head[] | []>(HeadData);

  const [kicks] = useState<Kick[] | []>(KicksAvatar);
  const [kicksData] = useState<Kick[] | []>(KicksData);

  const [shirts] = useState<Shirt[] | []>(ShirtsAvatar);
  const [shirtsData] = useState<Shirt[] | []>(ShirtsData);

  const [pants] = useState<Pant[] | []>(PantsAvatar);
  const [pantsData] = useState<Pant[] | []>(PantsData);

  const [kickIndex, setKickIndex] = useState(-1);
  const [shirtIndex, setShirtIndex] = useState(-1);
  const [pantIndex, setPantIndex] = useState(-1);
  const [headwearIndex, setHeadwearIndex] = useState(-1);

  type Attribute = "pants" | "kicks" | "shirts" | "headwears";

  const handleClick = (index: number, type: Attribute) => {
    if (type === "kicks") {
      setKickIndex(index);
    }
    if (type === "shirts") {
      setShirtIndex(index);
    }
    if (type === "pants") {
      setPantIndex(index);
    }
    if (type === "headwears") {
      setHeadwearIndex(index);
    }
  };

  return (
    <div className="style-yourself">
      <Navbar active="" />
      <div className="style-container">
        <div className="left-content">
          <div className="image-container">
            <div className="image-base">
              <LazyLoadImage
                src={Base}
                alt=""
                style={{ width: "100%" }}
                effect="blur"
                placeholderSrc={Base}
              />
            </div>
            <div className="image-kicks">
              <img
                src={kicksData[kickIndex]?.image}
                alt=""
                style={{ width: "100%" }}
                className="kicks"
              />
            </div>
            <div className="image-shirt">
              <img
                src={shirtsData[shirtIndex]?.image}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="image-pant">
              <img
                src={pantsData[pantIndex]?.image}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="image-headwear">
              <img
                src={headwearsData[headwearIndex]?.image}
                alt=""
                style={{ width: "100%" }}
              />
            </div>

            {/* <div className="content">
              <img src={kicks[kickIndex]?.image} alt="" />
            </div> */}
          </div>
        </div>
        <div className="right-content">
          <div className="buttons">
            <div
              className={state.shirts ? "active" : ""}
              onClick={() =>
                setState({
                  headwear: false,
                  pants: false,
                  shirts: true,
                  kicks: false,
                  accessories: false,
                })
              }
            >
              Shirts
            </div>
            <div
              className={state.pants ? "active" : ""}
              onClick={() =>
                setState({
                  headwear: false,
                  pants: true,
                  shirts: false,
                  kicks: false,
                  accessories: false,
                })
              }
            >
              Pants
            </div>
            <div
              className={state.kicks ? "active" : ""}
              onClick={() =>
                setState({
                  headwear: false,
                  pants: false,
                  shirts: false,
                  kicks: true,
                  accessories: false,
                })
              }
            >
              Kicks
            </div>
            <div
              className={state.headwear ? "active" : ""}
              onClick={() =>
                setState({
                  headwear: true,
                  pants: false,
                  shirts: false,
                  kicks: false,
                  accessories: false,
                })
              }
            >
              Headwear
            </div>
            <div
              className={state.accessories ? "active" : ""}
              onClick={() =>
                setState({
                  headwear: false,
                  pants: false,
                  shirts: false,
                  kicks: false,
                  accessories: true,
                })
              }
            >
              Accessories
            </div>
          </div>
          {/* <p>{kickIndex}</p> */}
          <div className="avatar-details">
            {/* {state.headwear && <Avatar type="headwear" />}

              {state.shirts && <Avatar type="shirts" />}

              {state.pants && <Avatar type="pants" />}  */}
            {state.shirts &&
              shirts.map((shirt: Shirt, i: number) => {
                return (
                  <Avatar
                    key={i}
                    type="shirts"
                    shirt={shirt}
                    onClick={() => handleClick(i, "shirts")}
                    index={i}
                    shirtIndex={shirtIndex}
                  />
                );
              })}

            {state.pants &&
              pants.map((pant: Pant, i: number) => {
                return (
                  <Avatar
                    key={i}
                    type="pants"
                    pant={pant}
                    onClick={() => handleClick(i, "pants")}
                    index={i}
                    pantIndex={pantIndex}
                  />
                );
              })}

            {state.kicks &&
              kicks.map((kick: Kick, i: number) => {
                return (
                  <Avatar
                    key={i}
                    type="kicks"
                    kick={kick}
                    onClick={() => handleClick(i, "kicks")}
                    index={i}
                    kickIndex={kickIndex}
                  />
                );
              })}

            {state.headwear &&
              headwears.map((head: Head, i: number) => {
                return (
                  <Avatar
                    key={i}
                    type="headwears"
                    head={head}
                    onClick={() => handleClick(i, "headwears")}
                    index={i}
                    headwearIndex={headwearIndex}
                  />
                );
              })}

            {/* {state.accessories && <Avatar type="accessories" />} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StyleYourself;
