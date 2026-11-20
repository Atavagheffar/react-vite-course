import React from "react";
import styles from "./menutop.module.css";
import { Link } from "react-router";

const Menutop = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <Links */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menutop;
