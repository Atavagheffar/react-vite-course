import React from "react";
import { Link, useParams } from "react-router-dom";

import Menutop from "../Menutop";

const Showproducts = () => {
  const x = useParams();
  console.log(x);

  return (
    <div>
      {" "}
      <Menutop />
      Showproducts
    </div>
  );
};

export default Showproducts;
