import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarType } from "../../utils";
import Logo from "./svg/logo.png";
import Union from "./svg/Union.png";
import Times from "./svg/Vector.png";
import Discord from "./svg/rptrd_discord.svg";
import Twitter from "./svg/twitter_dark.svg";
import "./navbar.scss";

const Navbar: FC<NavbarType> = ({ active }) => {
  const [click, setClick] = useState(true);

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={Logo} alt="Rptrd logo" className="logo" />
        </Link>
        <nav className={click ? "nav" : "nav-mobile"}>
          <ul>
            <li className={active === "home" ? "active tab" : "clickable"}>
              <Link to="/">Home</Link>
            </li>

            {/* <li className={active === "souls" ? "active tab" : "clickable"}>
              <Link to="/souls">Souls</Link>
            </li> */}
            <li className={active === "haven" ? "active tab" : "clickable"}>
              <Link to="/haven">Haven</Link>
            </li>
            <li className={active === "soul-map" ? "active tab" : "clickable"}>
              <Link to="/soul-map">Soul map</Link>
            </li>
            <li className={active === "whitelist" ? "active tab" : "clickable"}>
              <Link to="/whitelist">Apply for WL</Link>
            </li>
            <li className="inactive">
              <Link to="/wallet-checker">Wallet Checker</Link>
            </li>
            <li className="clickable">
              <a
                href="https://twitter.com/raptur3dsols"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="" />
              </a>
            </li>
            <li className="clickable">
              <Link to="">
                <img src={Discord} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav-menu">
          {click ? (
            <img src={Union} alt="" onClick={() => setClick(!click)} />
          ) : (
            <img
              src={Times}
              alt=""
              className="times"
              onClick={() => setClick(!click)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
