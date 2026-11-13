import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Page404 from "./pages/Page404";
import Shoes from "./pages/Shoes";
import Bags from "./pages/Bags";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />}>
        <Route path="Shoes" element={<Shoes />} />
        <Route path="Bags" element={<Bags />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
