
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import OrderPage from './components/pages/OrderPage'
import CartPage from './components/pages/CartPage'

function App() {
  

  return (
    <>
    {/* <BrowserRouter> */}
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/order/:id' element={<OrderPage/>}/>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
    {/* </BrowserRouter> */}
     


    </>
  )
}

export default App
//  <Route path="/order/:id" element={<OrderPage />} />