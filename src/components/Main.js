import { useContext, useState } from "react";
import classes from "./Main.module.css";
import CompA from "./items/CompA";
import CompB from "./items/CompB";
import CompC from "./items/CompC";
import CompD from "./items/CompD";
import StoreContext from "../store/store";
import Success from "./items/Success";
let compA = [];
let compB = [];
let compC = [];
const Main = ({ className, prev, next }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [radio, setRadio] = useState("");
  const [checked, setChecked] = useState(true);
  const [checkboxValue, setValue] = useState([]);

  const store = useContext(StoreContext);
  const nameHandler = (e) => {
    setName(e);
  };
  const emailHandler = (e) => {
    setEmail(e);
  };
  const telHandler = (e) => {
    setTel(e);
  };
  const compAHandler = () => {
    const items = { name: name, email, tel: tel };
    compA = items;
    
    store.addCompA(compA);
  };
  const radioHandler = (e) => {
    setRadio(e);
  };
  const planType = () => {
    setChecked(!checked);
  };
  const compBHandler = (items) => {
    const item = { items: items };
    compB = item;
    store.addCompB(compB);
  };
  const checkHandler = (e) => {
    //eslint-disable-next-line
    const { name, value, checked } = e.target;
    if (checked) {
      setValue((prevChecked) => {
        let updateValue;
        updateValue = [...prevChecked, value];
        return updateValue;
      });
    } else {
      setValue((prevChecked) => {
        let updateValue;
        updateValue = prevChecked.filter((item) => item !== value);
        return updateValue;
      });
    }
  };
  const compCHandler = (array) => {
    const ar = { array: array };
    compC = ar;
    store.addCompC(compC);
  };

  const cur = store.current;
  return (
    <article className={`${className} ${classes.content}`}>
      {cur === 0 && (
        <CompA
          name={name}
          email={email}
          tel={tel}
          nameHandler={nameHandler}
          emailHandler={emailHandler}
          telHandler={telHandler}
          compAHandler={compAHandler}
          next={next}
          prev={prev}
          cur={cur}
        />
      )}
      {cur === 1 && (
        <CompB
          prev={prev}
          next={next}
          radio={radio}
          radioHandler={radioHandler}
          compBHandler={compBHandler}
          checked={checked}
          planType={planType}
        />
      )}
      {cur === 2 && (
        <CompC
          next={next}
          prev={prev}
          checked={checked}
          checkHandler={checkHandler}
          checkboxValue={checkboxValue}
          compCHandler={compCHandler}
        />
      )}
      {cur === 3 && (
        <CompD
          title="Finishing up"
          summary="Double-check everything looks OK before confirming"
          prev={prev}
          next={next}
          checked={checked}
          compA={compA}
          compB={compB}
          compC={compC}
        />
      )}
      {cur === 4 && <Success />}
    </article>
  );
};
export default Main;
