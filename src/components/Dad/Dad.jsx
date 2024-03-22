/* eslint-disable react/prop-types */
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sis from "../Sis/Sis";

const Dad = ({ asset }) => {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex">
        <Myself asset={asset}></Myself>
        <Brother></Brother>
        <Sis></Sis>
      </section>
    </div>
  );
};

export default Dad;
