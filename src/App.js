import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartProvider from "./store/CartProvider";


function App() {
  return (
    <div>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Products />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
