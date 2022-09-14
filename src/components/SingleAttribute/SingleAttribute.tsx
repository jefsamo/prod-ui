import Dread from "./svg/dread.png";
import "./singleAttribute.scss";

const SingleAttribute = () => {
  return (
    <div className="detail-content">
      <img src={Dread} alt="" />
      <h2>Grim reaper</h2>
      <p>Rarity count</p>
      <p className="rank"># 2471</p>
      <p className="percentage">Rarity percentage</p>
      <p className="percent">90%</p>
    </div>
  );
};

export default SingleAttribute;
