import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartProvider from "./context/CartContext"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App