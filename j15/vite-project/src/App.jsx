import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Page404 from "./pages/Page404";
import Shoes from "./pages/Shoes";
import Bags from "./pages/Bags";
import Showproducts from "./pages/Showproducts";
import Basket from "./pages/Basket";
import Test151 from "./Test151";

function App() {
  return (
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Products" element={<Products />}>
    //       <Route path="Shoes" element={<Shoes />} />
    //       <Route path="Bags" element={<Bags />} />
    //     </Route>
    //     <Route path="/Products/:productid" element={<Showproducts />} />

    //     <Route path="*" element={<Page404 />} />
    //     <Route path="/basket" element={<Basket />} />
    //   </Routes>
    <Test151 />
  );
}

export default App;
