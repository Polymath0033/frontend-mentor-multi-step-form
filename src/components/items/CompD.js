import classes from "./CompD.module.css";
import { useContext } from "react";
import StoreContext from "../../store/store";
const CompD = ({ next, prev, checked,compA,compB,compC }) => {
  const store = useContext(StoreContext);
  const title = compB.items[0].title;
  const price = compB.items[0].price;
  const com = compC.array;
  let total = 0;
  for (const comp of compC.array) {
    total += comp.price;
  }

  const toCompB = () => {
    store.setCurrent(1);
  };
  return (
    <>
      <h1>Finishing up</h1>
      <h6>Double-check everything looks OK before confirming</h6>
      <ul className={classes.ul}>
        <li>
          <div className={classes.label}>
            <h4>
              {title} {checked ? "(Monthly)" : "(Yearly)"}
            </h4>
            <button onClick={toCompB}>Change</button>
          </div>
          <h5>
            ${price}/{checked ? "mo" : "yr"}
          </h5>
        </li>
        <li className={classes.last}>
          {com.map((comp) => (
            <div className={classes.item} key={comp.title}>
              <h5>{comp.title}</h5>
              <h5>
                +${comp.price} {checked ? "/mo" : "/yr"}
              </h5>
            </div>
          ))}

        </li>
      </ul>
      <div className={classes.total}>
        <h5>Total per month</h5>
        <h3>
          ${price + total}/{checked ? "mo" : "yr"}
        </h3>
      </div>
      <div className="button">
        <button onClick={prev} type="button" className="prev">
          Go back
        </button>
        <button onClick={next} type="submit" className="confirm">
          Confirm
        </button>
      </div>
    </>
  );
};
export default CompD;
