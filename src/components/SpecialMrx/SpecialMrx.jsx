/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";
const SpecialMrx = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h4>Special one</h4>
      <p style={{ fontSize: "10px" }}>Has : {asset}</p>
      <p style={{ fontSize: "10px" }}>Also has : {gift}</p>
    </div>
  );
};

export default SpecialMrx;
