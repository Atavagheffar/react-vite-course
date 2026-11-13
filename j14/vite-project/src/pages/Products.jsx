import { Link, Outlet } from "react-router-dom";
import Menutop from "../Menutop";

const Products = () => {
  return (
    <div>
      Products
      <Menutop />
      <hr />
      <Link to="bags">bags</Link>
      <br />
      <Link to="shoes">shoes</Link>
      <Outlet />
    </div>
  );
};

export default Products;
