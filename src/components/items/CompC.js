import { Fragment, useState } from "react";
import classes from "./CompC.module.css";

const ads = [
  {
    title: "Online service",
    summary: "Access to multiplayer games",
    price: { monthly: 1, yearly: 10 },
  },
  {
    title: "Larger storage",
    summary: "Extra 1TB of cloud save",
    price: { monthly: 2, yearly: 20 },
  },
  {
    title: "Customizable profile",
    summary: "Custom theme on your profile",
    price: { monthly: 2, yearly: 20 },
  },
];
const CompC = ({
  next,
  prev,
  checked,
  checkboxValue,
  checkHandler,
  compCHandler,
}) => {
  const [validate, setValidate] = useState(true);
  const _ads = ads.map(({ title, summary, price }) => {
    if (checked) {
      return {
        title: title,
        summary: summary,
        price: price.monthly,
      };
    } else {
      return {
        title: title,
        summary: summary,
        price: price.yearly,
      };
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (checkboxValue.length < 1) {
      setValidate(false);
      return;
    }

    setValidate(true);
    let array = [];
    _ads.map((ad) => {
      for (const checkbox of checkboxValue) {
        if (ad.title === checkbox) {
          array.push(ad)
        }
      }
      return array;
    })
    compCHandler(array);
    next();
  };
  return (
    <Fragment>
      <h1>Pick add-ons</h1>
      <h6>Add-ons help enhance your gaming experience</h6>
      <form onSubmit={submitHandler}>
        <ul className={classes.ul}>
          {_ads.map((ad) => (
            <li
              id={ad.title}
              key={ad.title}
              className={`${classes.list} ${
                checkboxValue.includes(ad.title) ? classes.checked : ""
              }`}
            >
              <input
                type="checkbox"
                value={ad.title}
                name={ad.title}
                id={ad.title}
                onChange={(e) => checkHandler(e)}
                checked={checkboxValue.includes(ad.title)}
              />
              <label htmlFor={ad.title} className={classes.label}>
                <h3>{ad.title}</h3>
                <p>{ad.summary}</p>
              </label>
              <h5 id={ad.title}>
                +${ad.price}
                {checked ? "/mo" : "/yr"}
              </h5>
            </li>
          ))}
        </ul>

        <div className="button">
          <button onClick={prev} type="button" className="prev">
            Go back
          </button>
          <button type="submit" className="next">
            Next step
          </button>
        </div>
        {!validate && <p className="error">You must select one</p>}
      </form>
    </Fragment>
  );
};
export default CompC;
