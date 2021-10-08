import { Link } from "react-router-dom";
import React from "react";

const Orders = () => {
  return (
    <div>
      <ul className="orderList">
        <li>
          <div>
            Item 1 (Order #354312)<br />
            Description: Lorem ipsum dolor sit amet
          </div>
          <div className="sideTags">
            <div>
              <small>
                Quantity: 2 <br /> Remove | Change
              </small>
            </div>
            <small>Weight: 7.3kg</small>
            <div className="orderSelector">
              <label> Select Item </label>
              <input type="checkbox" />
            </div>
          </div>
        </li>
        <li>
          <div>
            Item 2 (Order #893452)<br />
            Description: Excepteur sint occaecat cupidatat
          </div>
          <div className="sideTags">
            <div>
              <small>
                Quantity: 2 <br /> Remove | Change
              </small>
            </div>
            <small>Weight: 7.3kg</small>
            <div className="orderSelector">
              <label> Select Item </label>
              <input type="checkbox" />
            </div>
          </div>
        </li>
        <li>
          <div>
            Item 3 (Order #467202)<br />
            Description: in voluptate velit esse cillum adipiscing elit
          </div>
          <div className="sideTags">
            <div>
              <small>
                Quantity: 2 <br /> Remove | Change
              </small>
            </div>
            <small>Weight: 7.3kg</small>
            <div className="orderSelector">
              <label> Select Item </label>
              <input type="checkbox" />
            </div>
          </div>
        </li>
      </ul>
      <div className="buttonContainer">
        <Link style={{textDecoration:'none'}} to="/options">
          <button className="button is-info">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
