import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { WishlistProvider } from './contexts/WishlistContext'
import Wishlist from './components/Wishlist'
import LandingPage from './pages/LandingPage'
import CartPage from './pages/CartPage'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './pages/layouts/MainLayout'
import AuthLayout from './pages/layouts/AuthLayout'
import ProductInfoPage from './pages/ProductInfoPage'
import { CartProvider } from './contexts/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <WishlistProvider>       
          <Routes>
            <Route path="/" element={<MainLayout><LandingPage /></MainLayout>}/>
            <Route path="cart" element={<MainLayout><CartPage /></MainLayout>}/>
            <Route path="/wishlist" element={<MainLayout><Wishlist /></MainLayout>}/>
            <Route path="/info" element={<MainLayout><ProductInfoPage /></MainLayout>}/>
            <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>}/>
            <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>}/>
          </Routes>    
        </WishlistProvider>
      </CartProvider>
    </>
  )
}

export default App
