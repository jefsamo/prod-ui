import Navbar from "../../components/Navbar/Navbar";
import Haven from "./svg/haven_map.png";
import "./soulMap.scss";

const SoulMap = () => {
  return (
    <div className="soul-map">
      <div className="container">
        <Navbar active="soul-map" />
        <div className="soulmap-content">
          <div className="left-content">
            <h1>Soul map</h1>
            <p>
              Work In progress, Currently drafting the bullshit utilities <br />
              like, Staking, Plain old merch, and some buzzwords
            </p>
            <a href="https://rptrdsolsnft.medium.com">Our foremost plan</a>
            <p className="rptrd">
              {new Date().getFullYear()}, RPTRD Souls <br /> Rapture is coming.
            </p>
          </div>
          <div className="right-content">
            <img src={Haven} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulMap;
