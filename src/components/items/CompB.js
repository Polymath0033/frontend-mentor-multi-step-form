import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";
import ToggleSwitch from "../ToggleSwitch";
import classes from "./CompB.module.css";
import { useState } from "react";
const plans = [
  { title: "Arcade", img: arcade, price: { monthly: 9, yearly: 90 } },
  { title: "Advanced", img: advanced, price: { monthly: 12, yearly: 120 } },
  { title: "pro", img: pro, price: { monthly: 15, yearly: 150 } },
];

const CompB = ({
  next,
  prev,
  radio,
  radioHandler,
  checked,
  planType,
  compBHandler,
}) => {
  const [validate, setValidate] = useState(true);

  const content = plans.map(({ title, img, price }) => {
    if (checked) {
      return {
        title: title,
        img: img,
        price: price.monthly,
      };
    } else {
      return {
        title: title,
        img: img,
        price: price.yearly,
      };
    }
  });
  const switchToggle = () => {
    planType();
  };
  const submit = (e) => {
    e.preventDefault();
    if (radio.length < 1) {
      setValidate(false);
      return;
    }
    const selected = content.filter((cont) => cont.title === radio)
    setValidate(true);
    compBHandler(selected);
    next();
  };
  return (
    <>
      <h1>Select your plan</h1>
      <h6>You have the option of monthly or yearly billing</h6>
      <form className={classes.flex} onSubmit={submit}>
        {content.map((item) => (
          <>
            <input
              type="radio"
              name="radio"
              onChange={(e) => radioHandler(e.target.value)}
              value={item.title}
              id={item.title}
              key={`item-${item.price}`}
            />
            <label htmlFor={item.title} key={item.title}>
              <img src={item.img} alt={item.title} />
              <div>
                <h5>{item.title}</h5>
                <h5 className={classes.month}>
                  ${item.price}
                  {checked ? "/mo" : "/yr"}
                </h5>
                {!checked && <h5 className={classes.bonus}>2 months free</h5>}
              </div>
            </label>
          </>
        ))}
        <div className="button">
          <button onClick={prev} type="button" className="prev">
            Go back
          </button>
          <button type="submit" className="next">
            Next step
          </button>
        </div>
        {!validate && <p className="error" style={{position:'static'}}>You choose one of out this </p>}
      </form>
      <div>
        <ToggleSwitch onSwitch={switchToggle} checked={checked} />
      </div>
    </>
  );
};
export default CompB;
