import "./avatar.scss";

export type AvatarType = {
  type: string;
};

const Avatar = (typeAvatar: AvatarType) => {
  if (typeAvatar.type === "headwear") {
    return (
      <>
        <div className="avatar-products">
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
          <div className="product">headwear</div>
        </div>
      </>
    );
  }
  if (typeAvatar.type === "shirts") {
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
  if (typeAvatar.type === "pants") {
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
  if (typeAvatar.type === "kicks") {
    return <>kicks</>;
  }
  if (typeAvatar.type === "accessories") {
    return <>accessories</>;
  }
  return <></>;
};

export default Avatar;
