import Navbar from "../../components/Navbar/Navbar";
import Avatar2 from "./svg/avatar.png";
import "./styleYourself.scss";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../components/Avatar/Avatar";

const StyleYourself = () => {
  const [state, setState] = useState({
    headwear: true,
    pants: false,
    shirts: false,
    kicks: false,
    accessories: false,
  });

  return (
    <div className="style-yourself">
      <div className="container">
        <Navbar active="" />
        <div className="style-container">
          <div className="left-content">
            <div className="image-container">
              <div className="content">
                <img src={Avatar2} alt="" />
              </div>
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
            <div className="avatar-details">
              {state.headwear && <Avatar type="headwear" />}

              {state.shirts && <Avatar type="shirts" />}

              {state.pants && <Avatar type="pants" />}

              {state.kicks && <Avatar type="kicks" />}

              {state.accessories && <Avatar type="accessories" />}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StyleYourself;
