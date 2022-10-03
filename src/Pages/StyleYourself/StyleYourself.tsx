import Navbar from "../../components/Navbar/Navbar";
import "./styleYourself.scss";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../components/Avatar/Avatar";
import { KicksData, Kick } from "../../kicks";
import { ShirtsData, Shirt } from "../../shirts";
import { PantsData, Pant } from "../../pants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Base from "./svg/base.png";

const StyleYourself = () => {
  const [state, setState] = useState({
    headwear: true,
    pants: false,
    shirts: false,
    kicks: false,
    accessories: false,
  });

  const [kicks] = useState<Kick[] | []>(KicksData);
  const [kickIndex, setKickIndex] = useState(-1);
  const handleKicksClick = (index: number) => {
    setKickIndex(index);
  };

  const [shirts] = useState<Shirt[] | []>(ShirtsData);
  const [shirtIndex, setShirtIndex] = useState(-1);
  const handleShirtsClick = (index: number) => {
    setShirtIndex(index);
  };

  const [pants] = useState<Pant[] | []>(PantsData);
  const [pantIndex, setPantIndex] = useState(-1);
  const handlePantClick = (index: number) => {
    setPantIndex(index);
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
                src={kicks[kickIndex]?.image}
                alt=""
                style={{ width: "100%" }}
                className="kicks"
              />
            </div>
            <div className="image-shirt">
              <img
                src={shirts[shirtIndex]?.image}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="image-pant">
              <img
                src={pants[pantIndex]?.image}
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
                    onClick={() => handleShirtsClick(i)}
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
                    onClick={() => handlePantClick(i)}
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
                    onClick={() => handleKicksClick(i)}
                    index={i}
                    kickIndex={kickIndex}
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
