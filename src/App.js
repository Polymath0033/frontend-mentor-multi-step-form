import React, { useContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { array } from "./data";
import StoreContext from "./store/store";

function App() {
  const store = useContext(StoreContext);
  const current = store.current;
  const prev = () => {
    store.prev();
  };
  const next = () => {
    store.next();
  };

  return (
    <div className="App">
      <div className="content">
        <SideBar className="side" array={array} current={current} />
        <Main
          className="main"
          array={array}
          next={next}
          current={current}
          prev={prev}
        />
      </div>
    </div>
  );
}

export default React.memo(App);
