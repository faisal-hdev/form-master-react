import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const SpeacialOne = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h4>Speacial One</h4>
      <p style={{ fontSize: "10px" }}>Has : {gift}</p>
    </div>
  );
};

export default SpeacialOne;
