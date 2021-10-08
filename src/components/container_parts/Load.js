import React, { useState } from "react";
import { Link } from "react-router-dom";

const Load = (props) => {
  const [load, setLoad] = useState(false);

  const handleClick = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      props.history.push("/orders");
    }, 1200);
  };
  return (
    <div className="titleContainer">
      <div>
        <h1 className="title">Welcome,</h1>
        <h2 className="subtitle">Click load to retrieve orders</h2>
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => handleClick()}
          className={load ? "button is-info is-loading" : "button is-info"}
        >
          Load
        </button>
      </div>
    </div>
  );
};

export default Load;
