import axios from "axios";
import React, { useEffect } from "react";

const Test151 = () => {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts ")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response));
    //   **************************** response.data or response.status or ...
  }, []);
  return <div>Test151</div>;
};

export default Test151;
