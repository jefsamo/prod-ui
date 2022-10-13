import Navbar from "components/Navbar/Navbar";
import Haven from "./svg/haven-map.jpg";
import "./soulMap.scss";

const SoulMap = () => {
  return (
    <div className="soul-map">
      <Navbar active="soul-map" />
      <div className="soulmap-content">
        <div className="left-content">
          <h1>Soul map</h1>
          <p>
            Work In progress, Currently drafting the bullshit utilities <br />
            like, Staking, Plain cool merch, and some buzzwords.
          </p>
          <button
            // href="https://rptrdsolsnft.medium.com"
            // target="_blank"
            // rel="noreferrer"
            className="btn"
          >
            <span className="visible">Our foremost plan</span>
            <span className="invisible">Coming soon</span>
          </button>
          <p className="rptrd">
            {new Date().getFullYear()}, RPTRD Souls <br /> Rapture is coming.
          </p>
        </div>
        <div className="right-content">
          <img src={Haven} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SoulMap;
