import React from "react";
import Breadcrumb from "./container_parts/Breadcrumb";
import Routes from "./container_parts/Routes";

const Container = () => {
  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <Breadcrumb />
      <div className="notification is-white-bis is-fullheight">
        <Routes />
      </div>
    </div>
  );
};

export default Container;
