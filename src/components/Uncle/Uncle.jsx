import Cousin from "../Cousin/Cousin";
import Cousin2 from "../Cousin2/Cousin2";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin></Cousin>
        <Cousin2></Cousin2>
      </section>
    </div>
  );
};

export default Uncle;
