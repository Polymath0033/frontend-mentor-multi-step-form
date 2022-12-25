import classes from "./SideBar.module.css";

const SideBar = ({ className, array, current}) => {
  return (
    <div className={`${className} ${classes.bar}`}>
      <ul className={classes.list}>
        {array.map((item, index) => (
          <li key={item.id} >
            <div 
              className={`${classes.circle}  ${
                current === index ? classes.active : ""
              }`}
            >
              {index + 1}
            </div>
            <div className={classes.text}>
              <h4 className={classes.step}>step {index + 1}</h4>
              <h4>{item.sides}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
