import React, { useState } from "react";

const StoreContext = React.createContext({
  items: [],
  current: 0,
  checked: true,
  setCurrent: (num) => {},
  next: () => {},
  prev: () => {},
  planType: () => {},
  nex: () => {},
  addCompA: (item) => {},
  addCompB: (item) => {},
  addCompC: (item) => {},
});
export const StoreProvider = (props) => {
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(true);
  const next = () => {
    setCurrent((prev) => (prev += 1));
  };
  const prev = () => {
    setCurrent((prev) => (prev -= 1));
  };
  const addCompA = (item) => {
    setItems((prev) => prev.concat(item));
    
  };
  const addCompB = (item) => {
    setItems((prev) => {
      let update;
      update = prev.concat(item);
      return [...update];
    });
  };
  const addCompC = (item) => {
    setItems((prev) => {
      let update;
      update = prev.concat(item);
      return [...update];
    });
  };
  const planType = () => {
    setChecked(!checked);
  };
  const nex = () => {
    setCurrent((cur) => cur++);
  };
  const storeContext = {
    items: items,
    current: current,
    checked: checked,
    setCurrent: setCurrent,
    next: next,
    prev: prev,
    planType: planType,
    nex: nex,
    addCompA: addCompA,
    addCompB: addCompB,
    addCompC: addCompC,
  };
  return (
    <StoreContext.Provider value={storeContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
