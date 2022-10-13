import Navbar from "components/Navbar/Navbar";
import Wallpaper from "./svg/wallpaper.png";
import "./walletChecker.scss";

const WalletChecker = () => {
  return (
    <div className="wallet-checker">
      <Navbar active="wallet-checker" />
      <div className="main-content">
        <div className="left-content">
          <h1>Wallet Checker</h1>
          <p>Confirm your deets</p>
          <div className="input">
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="right-content">
          <img src={Wallpaper} alt="" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default WalletChecker;
