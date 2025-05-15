
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import OrderPage from './components/pages/OrderPage'
import CartPage from './components/pages/CartPage'
import Wachlist from './components/pages/Wachlist'
import { WishlistProvider } from './components/pages/WatchListContext';
import Checkout from './components/pages/Checkout'
import About from './components/Footer/About'
import Footer from './components/pages/Footer'
import Terms from './components/Footer/TearmsCondition'
import Contact from './components/Footer/Contact'
function App() {
  

  return (
    <>
    {/* <BrowserRouter> */}
          <Navbar/>
          <WishlistProvider>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/order/:id' element={<OrderPage/>}/>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wachlist" element={<Wachlist />} />
             <Route path="/checkout" element={<Checkout />} />
             <Route path="/about" element={<About />} />
              <Route path="/tearms" element={<Terms />} />
               <Route path="/contact" element={<Contact />} />
          </Routes>
          </WishlistProvider>
          <Footer/>
    {/* </BrowserRouter> */}
     


    </>
  )
}

export default App
//  <Route path="/order/:id" element={<OrderPage />} />