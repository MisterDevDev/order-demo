import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="optionsForm">
      <div>
        <h5>
          Apply Additional UpCharge?
          <br />
        </h5>
        <form>
          <div>
            <input type="radio" id="one" name="upCharge" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" id="two" name="upCharge" />
            <label>No</label>
          </div>
        </form>
        <hr />
      </div>
      <div>
        <h5>
          Sign for delivery?
          <br />
        </h5>
        <form>
          <div>
            <input type="radio" id="one" name="sign" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" id="two" name="sign" />
            <label>No</label>
          </div>
        </form>
        <hr />
      </div>
      <div>
        <h5>
          Purchase delivery insurance?
          <br />
        </h5>
        <form>
          <div>
            <input type="radio" id="one" name="insurance" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" id="two" name="insurance" />
            <label>No</label>
          </div>
        </form>
        <hr />
      </div>
      <div className="buttonContainer">
        <Link style={{textDecoration:'none'}} to="/carriers">
          <button className="button is-info">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Options;
