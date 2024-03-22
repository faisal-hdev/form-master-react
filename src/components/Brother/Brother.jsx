import { useContext } from "react";
import { moneyContext } from "../GrandPa/GrandPa";

const Brother = () => {
  const [money] = useContext(moneyContext);
  return (
    <div>
      <h4>Brother Fahad</h4>
      <p>Grand Pa {money}</p>
    </div>
  );
};

export default Brother;
