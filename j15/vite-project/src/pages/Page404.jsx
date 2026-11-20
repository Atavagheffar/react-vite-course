import React from "react";
import Menutop from "../Menutop";
import img404 from "../assets/Error page 404 Illustration.jpg";

const Page404 = () => {
  return (
    <div>
      <Menutop />
      <img src={img404} alt="" srcset="" />
    </div>
  );
};

export default Page404;
