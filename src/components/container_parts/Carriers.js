import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carriers = () => {
  const ups = {
    name: "UPS",
    services: [
      { id:1, description: "UPS - 9 to 15 day delivery", price: 7.99 },
      { id:2, description: "UPS - 7 to 10 day delivery", price: 15.99 },
      { id:3, description: "UPS - 3 to 4 express delivery", price: 19.99 },
      { id:4, description: "UPS - over night delux", price: 34.26 },
    ],
  };
  const usps = {
    name: "USPS",
    services: [
      { id:1, description: "USPS - economy delivery", price: 3.99 },
      { id:2, description: "USPS - standard 9 - 12 day delivery", price: 7.99 },
      { id:3, description: "USPS - rush delivery 4 - 5 day delivery", price: 20.99 },
      { id:4, description: "USPS - 1 day special delivery", price: 40 },
    ],
  };
  const carrierA = {
    name: "CarrierA",
    services: [
      { id:1, description: "Standard 5 day delivery", price: 12.99 },
      { id:2, description: "Air drop next day delivery", price: 37.99 },
      { id:3, description: "Discount delivery", price: 3.99 },
      { id:4, description: "Best effort 3 day delivery", price: 14.99 },
    ],
  };
  const carrierB = {
    name: "CarrierB",
    services: [
      { id:1, description: "Freight express - 5 day delivery", price: 8.79 },
      { id:2, description: "Drone Delivery - same day delivery", price: 25.88 },
      { id:3, description: "Hoseback delivery - thorough bred stallion", price: 3 },
      { id:4, description: "Caravan - lots of thorough bred stallions", price: 15 },
    ],
  };
  const [tab, setTab] = useState(ups);

  const myTabs = [ups, usps, carrierA, carrierB];

  const handleClick = (curTab) => {
    setTab(curTab);
  };

  return (
    <div>
      <div>
        <div>
          <p className="panel-tabs">
            <a
              className={tab.name == "UPS" ? "selectedTab" : "deselectedTab"}
              onClick={() => handleClick(ups)}
            >
              UPS
            </a>
            <a
              className={tab.name == "USPS" ? "selectedTab" : "deselectedTab"}
              onClick={() => handleClick(usps)}
            >
              USPS
            </a>
            <a
              className={
                tab.name == "CarrierA" ? "selectedTab" : "deselectedTab"
              }
              onClick={() => handleClick(carrierA)}
            >
              Carrier-A
            </a>
            <a
              className={
                tab.name == "CarrierB" ? "selectedTab" : "deselectedTab"
              }
              onClick={() => handleClick(carrierB)}
            >
              Carrier-B
            </a>
          </p>
        </div>
        <div>
          <p style={{ marginBottom: "10px" }}>Please select carrier service:</p>
          <form className="carrierForm">
            {tab.services.map((service) => {
              return (
                <div key={service.id}>
                  <input type="radio" id="one" name="carrier" />
                  <label>&emsp;{service.description}&emsp;| </label>
                  <small>${service.price}</small>
                  <br />
                </div>
              );
            })}
          </form>
          <br />
          <br />
        </div>
      </div>

      <div className="buttonContainer">
        <Link style={{ textDecoration: "none" }} to="/">
          <button className="button is-primary">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Carriers;
