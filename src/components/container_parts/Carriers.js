import React from "react";
import { Link } from "react-router-dom";

const Carriers = () => {
  return (
    <div>
      <p>Please select carrier:</p>
      <form className="carrierForm">
        <input type="radio" id="one" name="carrier" />
        <label>&emsp;UPS - 7 to 9 day delivery&emsp;| </label>
        <small>$7.99</small>
        <br />
        <input type="radio" id="two" name="carrier" />
        <label>&emsp;USPS - 5 to 6 day delivery&emsp;| </label>
        <small>$9.99</small>
        <br />
        <input type="radio" id="three" name="carrier" />
        <label>&emsp;Carrier A - over night express delivery&emsp;| </label>
        <small>$15.99</small>
        <br />
        <input type="radio" id="three" name="carrier" />
        <label>&emsp;Carrier B - economy shipping&emsp;| </label>
        <small>$3.99</small>
      </form>
      <br />
      <br />
      <div className="buttonContainer">
        <Link style={{textDecoration:'none'}} to="/">
          <button className="button is-primary">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Carriers;
