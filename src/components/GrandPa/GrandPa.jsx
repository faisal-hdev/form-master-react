/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import Aunty from "../Anti/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const AssetContext = createContext();
export const moneyContext = createContext(10000);

const GrandPa = () => {
  const [money, setMoney] = useState(2000);
  const asset = "Diamond";
  return (
    <div className="grandpa">
      <h3>GrandPAAA</h3>
      <p>Net money : {money}</p>
      <section className="flex">
        <moneyContext.Provider value={[money, setMoney]}>
          <AssetContext.Provider value="Golds">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty asset={asset}></Aunty>
          </AssetContext.Provider>
        </moneyContext.Provider>
      </section>
    </div>
  );
};

export default GrandPa;

/**
 * 1. created a context and export
 * 2. add provider for the context with a value. value could be anything
 * 3. useContext to access value in the api
 *
 */
