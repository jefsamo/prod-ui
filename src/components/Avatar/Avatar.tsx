import { Kick } from "../../utils";
import "./avatar.scss";

export type AvatarType = {
  type: string;
  kicks?: Kick[];
  kick: Kick;
  setKickIndex?: React.Dispatch<React.SetStateAction<number>>;
  onClick?: () => void;
  index?: number;
};

const Avatar = ({
  type,
  kicks,
  kick,
  setKickIndex,
  index,
  onClick,
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
        <div className="avatar-products">
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
          <div className="product">shirts</div>
        </div>
      </>
    );
  }
  if (type === "pants") {
    return (
      <>
        <div className="avatar-products">
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
          <div className="product">wale</div>
        </div>
      </>
    );
  }
  if (type === "kicks") {
    return (
      <>
        <div className="avatar-products">
          <div className="product">
            <img src={kick.image} alt="" onClick={onClick} />
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
