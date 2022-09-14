import React, { useState } from "react";
import Attributes from "../../components/Attributes/Attributes";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Ranking from "../../components/Ranking/Ranking";
import "./souls.scss";

const Souls = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className="souls">
      <div className="container">
        <Navbar active="souls" />
        <div className="rarity-header">
          <div className="left-content">
            <h2>Rarity Checker</h2>
            <p>
              Check How Rare your NFTs are. All souls are unique, but some are
              more Unique than Others. We think
            </p>
          </div>
          <div className="right-content"></div>
        </div>
        <div className="rarity-container">
          <div className="inner-content">
            <div
              className={active ? "active" : ""}
              onClick={() => setActive(true)}
            >
              Rankings
            </div>
            <div
              className={!active ? "active" : ""}
              onClick={() => setActive(false)}
            >
              Attributes
            </div>
          </div>
          {active ? <Ranking /> : <Attributes />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Souls;
