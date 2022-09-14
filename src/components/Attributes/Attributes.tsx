import "./attributes.scss";
import SingleAttribute from "../SingleAttribute/SingleAttribute";

const Attributes = () => {
  return (
    <div className="attributes">
      <div className="select">
        <select name="" id="">
          <option value="clothing">Clothing</option>
          <option value="background">Background</option>
          <option value="skin">Skin</option>
          <option value="eyes">Eyes</option>
          <option value="goop">Goop</option>
          <option value="teeth">Teeth</option>
        </select>
        <select name="" id="">
          <option value="">Sort By</option>
        </select>
      </div>
      <div className="attribute-detail">
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
        <SingleAttribute />
      </div>
    </div>
  );
};

export default Attributes;
