import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import SpotlightTreatment from './components/SpotlightTreatment'
import Products from './components/Products'
import Reviews from './components/Reviews'
import Branches from './components/Branches'
import Academy from './components/Academy'
import WhyAnanaz from './components/WhyAnanaz'
import InstagramFeed from './components/InstagramFeed'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import TreatmentsPage from './pages/TreatmentsPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <SpotlightTreatment />
      <Products />
      <Reviews />
      <Branches />
      <Academy />
      <WhyAnanaz />
      <InstagramFeed />
      <FAQ />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
