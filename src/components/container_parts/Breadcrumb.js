import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/options">Options</Link>
        </li>
        <li>
          <Link to="/carriers">Carrier</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
