import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";

import Menutop from "../Menutop";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    quantity: 20,
    price: 999,
    purchased: 5,
    remaining: 15,
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    quantity: 15,
    price: 1299,
    purchased: 7,
    remaining: 8,
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    quantity: 30,
    price: 249,
    purchased: 12,
    remaining: 18,
  },
  {
    id: 4,
    name: "Apple MagSafe Charger",
    quantity: 40,
    price: 39,
    purchased: 10,
    remaining: 30,
  },
  {
    id: 5,
    name: "Anker PowerCore 20000mAh",
    quantity: 25,
    price: 49,
    purchased: 8,
    remaining: 17,
  },
];

const Products = () => {
  let navigate = useNavigate();

  return (
    <div>
      Products
      <Menutop />
      <hr />
      <Link to="bags">bags</Link>
      <br />
      <Link to="shoes">shoes</Link>
      <hr />
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {" "}
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Products;
