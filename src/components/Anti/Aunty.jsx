/* eslint-disable react/prop-types */
import { useContext } from "react";
import Crahat from "../Crahat/Crahat";
import Croza from "../Croza/Croza";
import { moneyContext } from "../GrandPa/GrandPa";

const Aunty = ({ asset }) => {
  const [money, setMoney] = useContext(moneyContext);
  return (
    <div>
      <h3>Aunty</h3>
      <p style={{ fontSize: "12px" }}>GrandPa giving money : {money}</p>
      <button onClick={() => setMoney(money + 500)}>Add 500 tk</button>
      <section className="flex">
        <Croza asset={asset}></Croza>
        <Crahat></Crahat>
      </section>
    </div>
  );
};

export default Aunty;
