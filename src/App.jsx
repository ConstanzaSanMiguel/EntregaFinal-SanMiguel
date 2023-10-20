import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import CartWidget from "./components/CartWidget"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App