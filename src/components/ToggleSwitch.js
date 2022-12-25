import classes from "./ToggleSwitch.module.css";
const ToggleSwitch = ({ onSwitch,checked }) => {
  const switchHandler = (e) => {
    onSwitch()
  };
  return (
    <div className={classes.container}>
      <span
        className={`${classes.text} ${checked === true ? classes.active : ""}`}
      >
        monthly
      </span>
      <div className={classes.cont}>
        <div className={classes["toggle"]}>
          <input
            type="checkbox"
            className={classes.checkbox}
            name={`${checked ? "month" : "year"}`}
            id={`${checked ? "month" : "year"}`}
            onChange={switchHandler}
          />
          <label
            htmlFor={`${checked ? "month" : "year"}`}
            className={classes.label}
          >
            <span className={classes.inner}></span>
            <span className={classes.switch}></span>
          </label>
        </div>
      </div>

      <span
        className={`${classes.text} ${
          checked === false ? classes.active : ""
        } `}
      >
        yearly
      </span>
    </div>
  );
};
export default ToggleSwitch;
