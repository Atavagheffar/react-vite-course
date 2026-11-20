import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Menutop from "../Menutop";

let user = "amiri";

const Basket = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (user != "amiri") navigate("/");
  }, []);
  return (
    <div>
      <Menutop />
      Basket
    </div>
  );
};

export default Basket;
