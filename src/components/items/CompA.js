import React, { Fragment, useState } from "react";
//import Button from "../Button";

import classes from "./CompA.module.css";

let validate = false;
const CompA = ({
  name,
  email,
  tel,
  nameHandler,
  emailHandler,
  telHandler,
  compAHandler,
  next,
}) => {
  const [emailValidate, setEmailValidate] = useState(false);
  const [nameValidate, setNameValidate] = useState(false);
  const [telValidate, stTelValidate] = useState(false);

  const validateForm = () => {
    if (name.trim().length < 5) {
      setNameValidate(true);
    }
    if (!email.includes("@")) {
      setEmailValidate(true);
      
    }
    if (tel.trim().length < 6) {
      stTelValidate(true);
      
    }
    validate = true;
    return;
  };

  const submit = (e) => {
    // validateForm();
    // if (!validate) {
    //   return;
    // }
    e.preventDefault();
    validateForm();
    if (name.trim().length < 5) {
      setNameValidate(true);
      validate = true;
      return;
    }
    if (!email.includes("@")) {
      setEmailValidate(true);
      validate = true;
      return;
    }
    if (tel.trim().length < 6) {
      stTelValidate(true);
      validate = true;
      return;
    }
    validateForm();
    if (!validate) {
      return;
    }

    compAHandler();
    next();
  };
  return (
    <Fragment>
      <h1>Personal info</h1>
      <h6>Please provide your name,email address and phone number</h6>
      <form className={classes.form} onSubmit={submit}>
        <div className={classes.head}>
          <label htmlFor="name">Name</label>
          {nameValidate && <p>This field is required</p>}
        </div>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => nameHandler(e.target.value)}
          value={name}
          placeholder="Yusuf Olosan"
          className={`${emailValidate ? classes.error : ""}`}
        />
        <div className={classes.head}>
          <label htmlFor="email">Email Address</label>
          {emailValidate && <p>This field is required</p>}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => emailHandler(e.target.value)}
          value={email}
          placeholder="olosanyusuf19@gmail.com"
          className={`${emailValidate ? classes.error : ""}`}
        />
        <div className={classes.head}>
          <label htmlFor="phone">Phone Number</label>
          {telValidate && <p>This field is required</p>}
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="e.g +234 81 422 06715"
          id="phone"
          onChange={(e) => telHandler(e.target.value)}
          value={tel}
          className={`${telValidate === true ? classes.error : ""}`}
        />
        <div className="button">
          <div></div>
          <button type="submit" className="next">
            Next step
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default React.memo(CompA);
