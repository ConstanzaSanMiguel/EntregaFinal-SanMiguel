import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

const App = () => {
  const greeting = "Welcome to the kpop world"

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App