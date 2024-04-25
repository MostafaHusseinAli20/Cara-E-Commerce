import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Fotter from './components/Footer/Footer'
import Shop from './pages/shop/Shop'
import Pag2 from './pages/shop/Pagination Pages/page2'
import Pag3 from './pages/shop/Pagination Pages/page3'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'
import NotMatch from './pages/notMatch/notMatch'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/pag2" element={<Pag2 />} />
        <Route path="/pag3" element={<Pag3 />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
      <Fotter />
    </>
  )
}

export default App
