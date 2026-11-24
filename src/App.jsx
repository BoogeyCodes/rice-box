import { CartProvider } from './context/CartContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import Steam from './components/Steam.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Deals from './components/Deals.jsx'
import Menu from './components/Menu.jsx'
import Branches from './components/Branches.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <Steam />
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Deals />
            <Menu />
            <Branches />
          </main>
          <Footer />
          <Cart />
          <BackToTop />
        </div>
      </ModalProvider>
    </CartProvider>
  )
}
