import Logo from "./svg/logo2.png";
import { Link } from "react-router-dom";
import Twitter from "./svg/twitter.png";
import Discord from "./svg/discord.png";
import "./applyForWL.scss";
import Navbar from "../../components/Navbar/Navbar";

const ApplyForWL = () => {
  return (
    <div className="container">
      <div className="whitelist-container">
        <Navbar active="whitelist" />
        <div className="center-items">
          <div className="inner-items">
            <h1>
              RPTRD <br /> SOLS
            </h1>
            <p className="wl">Get WL</p>
            <p className="note">
              We were there, when the Sol NFT community started, we literally
              just had to draw doodles, and boom! Mint. the Wl meta isn’t
              something we completely agree with, It should be something you
              have fun with. The community comes first. so we’re setting a
              precedent where you can earn your RL (wl) based on your own
              creativity. LFG!
            </p>
            <Link to="/style-yourself">Style Yourself</Link>
          </div>
        </div>

        <footer className="footer-items">
          <div className="inner-footer">
            <p>Redefining the NFT space</p>
            <div className="quicklinks">
              <a href="https://twitter.com/rapyur3dsols">
                <img src={Twitter} alt="" />
              </a>
              <a href="https://twitter.com/rapyur3dsols">
                <img src={Discord} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ApplyForWL;
