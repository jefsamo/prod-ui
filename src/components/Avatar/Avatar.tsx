import { Kick } from "../../kicks";
import { Shirt } from "../../shirts";
import { Pant } from "../../pants";
import "./avatar.scss";

export type AvatarType = {
  type: string;
  kicks?: Kick[];
  kick?: Kick;
  setKickIndex?: React.Dispatch<React.SetStateAction<number>>;
  onClick?: () => void;
  index?: number;
  kickIndex?: number;
  shirt?: Shirt;
  shirts?: Shirt[];
  shirtIndex?: number;
  pant?: Pant;
  pants?: Pant[];
  pantIndex?: number;
};

const Avatar = ({
  type,
  kicks,
  kick,
  setKickIndex,
  index,
  onClick,
  kickIndex,
  shirt,
  shirtIndex,
  shirts,
  pant,
  pantIndex,
}: AvatarType) => {
  if (type === "headwear") {
    return (
      <>
        <div className="avatar-products">
          {kicks?.map((kick: Kick, i) => {
            return (
              <div className="product">
                <img src={kick.image} alt="" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
  if (type === "shirts") {
    return (
      <>
        <div
          className={
            index === shirtIndex ? "avatar-products active" : "avatar-products"
          }
        >
          <div className="product">
            <img src={shirt?.image} alt="" onClick={onClick} />
          </div>
        </div>
      </>
    );
  }
  if (type === "pants") {
    return (
      <>
        <div
          className={
            index === pantIndex ? "avatar-products active" : "avatar-products"
          }
        >
          <div className="product">
            <img src={pant?.image} alt="" onClick={onClick} />
          </div>
        </div>
      </>
    );
  }
  if (type === "kicks") {
    return (
      <>
        <div
          className={
            index === kickIndex ? "avatar-products active" : "avatar-products"
          }
        >
          <div className="product">
            <img src={kick?.image} alt="" onClick={onClick} />
          </div>
        </div>
      </>
    );
  }
  if (type === "accessories") {
    return <>accessories</>;
  }
  return <></>;
};

export default Avatar;
