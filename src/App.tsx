import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import BackToTopButton from './components/BackToTopButton'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import SpotlightTreatment from './components/SpotlightTreatment'
import Reviews from './components/Reviews'
import HowItWorks from './components/HowItWorks'
import WhyAnanaz from './components/WhyAnanaz'
import InstagramFeed from './components/InstagramFeed'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import TreatmentsPage from './pages/TreatmentsPage'
import BookingPage from './pages/BookingPage'
import SkinTreatmentsPage from './pages/SkinTreatmentsPage'
import TreatmentDetailPage from './pages/TreatmentDetailPage'
import GlassSkinPage from './pages/GlassSkinPage'
import GlassSkinDetailPage from './pages/GlassSkinDetailPage'
import DermaPage from './pages/DermaPage'
import DermaDetailPage from './pages/DermaDetailPage'
import SkinRebirthPage from './pages/SkinRebirthPage'
import SkinRebirthDetailPage from './pages/SkinRebirthDetailPage'
import SkinBrightPage from './pages/SkinBrightPage'
import SkinBrightDetailPage from './pages/SkinBrightDetailPage'
import AcnePage from './pages/AcnePage'
import AcneDetailPage from './pages/AcneDetailPage'
import BodyWellnessPage from './pages/BodyWellnessPage'
import BodyWellnessDetailPage from './pages/BodyWellnessDetailPage'
import BranchesPage from './pages/BranchesPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <TrustBar />
      <About />
      <HowItWorks />
      <WhyAnanaz />
      <Reviews />
      <InstagramFeed />
      <FAQ />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <BackToTopButton />
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/skin-treatments" element={<SkinTreatmentsPage />} />
          <Route path="/skin-treatments/:id" element={<TreatmentDetailPage />} />
          <Route path="/glass-skin" element={<GlassSkinPage />} />
          <Route path="/glass-skin/:id" element={<GlassSkinDetailPage />} />
          <Route path="/derma-restructuring" element={<DermaPage />} />
          <Route path="/derma-restructuring/:id" element={<DermaDetailPage />} />
          <Route path="/skin-rebirth" element={<SkinRebirthPage />} />
          <Route path="/skin-rebirth/:id" element={<SkinRebirthDetailPage />} />
          <Route path="/skin-bright" element={<SkinBrightPage />} />
          <Route path="/skin-bright/:id" element={<SkinBrightDetailPage />} />
          <Route path="/acne" element={<AcnePage />} />
          <Route path="/acne/:id" element={<AcneDetailPage />} />
          <Route path="/body-wellness" element={<BodyWellnessPage />} />
          <Route path="/body-wellness/:id" element={<BodyWellnessDetailPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          
          {/* Keeping old service paths for compatibility if needed, or redirecting them */}
          <Route path="/services/skin-treatments" element={<SkinTreatmentsPage />} />
          <Route path="/services/glass-skin" element={<GlassSkinPage />} />
          <Route path="/services/derma-restructuring" element={<DermaPage />} />
          <Route path="/services/skin-rebirth" element={<SkinRebirthPage />} />
          <Route path="/services/skin-bright" element={<SkinBrightPage />} />
          <Route path="/services/acne" element={<AcnePage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
