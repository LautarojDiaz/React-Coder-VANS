import CartContextProvider from "./components/context/CartContext";
import Navbar from "./components/Navbar"
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';





function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/category/:id"} element={<ItemListContainer/>} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"*"} element={<Error404/>} />
        </Routes>
        <ItemListContainer />
        <Footer />
      </div>
    </BrowserRouter>
  </CartContextProvider> 
    

  )
}

export default App;
