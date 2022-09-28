import Navbar from "../../components/Navbar/Navbar";
// import Avatar2 from "./svg/avatar.png";
import "./styleYourself.scss";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../components/Avatar/Avatar";
import { KicksData, Kick } from "../../utils";
import Base from "./svg/base.png";
import Coat from "./svg/coat.png";
import Pant from "./svg/boyfriend_jeans.png";
import Boot from "./svg/chelsea.png";
import Kicks from "./svg/kicks.png";

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
  console.log(kickIndex);

  const handleClick = (index: number) => {
    setKickIndex(index);
  };

  return (
    <div className="style-yourself">
      <Navbar active="" />
      <div className="style-container">
        <div className="left-content">
          <div className="image-container">
            <div className="image-base">
              <img src={Base} alt="" style={{ width: "100%" }} />
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
                // src={kicks[kickIndex]?.image}
                src={Coat}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="image-pant">
              <img
                // src={kicks[kickIndex]?.image}
                src={Pant}
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

              {state.pants && <Avatar type="pants" />} */}

            {state.kicks &&
              kicks.map((kick: Kick, i: number) => {
                return (
                  <Avatar
                    key={i}
                    type="kicks"
                    kick={kick}
                    // setKickIndex={setKickIndex}
                    onClick={() => handleClick(i)}
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
