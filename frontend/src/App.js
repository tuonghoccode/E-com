import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home/Home";
import { ProductContext } from "./Components/Contexts/ProductContext";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [myCartCounter, setMyCartCounter] = useState(0);
  const [myItemCart, setMyItemCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);


  useEffect(() => {
    async function getData() {
      const res = await axios.get("/products");
      return res;
    }
    getData().then((item) => setProducts(item.data));
    getData().catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setMyCartCounter, myCartCounter,myItemCart,setMyItemCart,subtotal, setSubtotal }}
    >
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
