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
import BodySpaPage from './pages/BodySpaPage'
import BodySpaDetailPage from './pages/BodySpaDetailPage'
import WeddingBridalPage from './pages/WeddingBridalPage'
import WeddingBridalDetailPage from './pages/WeddingBridalDetailPage'

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
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/skin-treatments" element={<SkinTreatmentsPage />} />
        <Route path="/skin-treatments/:id" element={<TreatmentDetailPage />} />
        <Route path="/body-spa" element={<BodySpaPage />} />
        <Route path="/body-spa/:id" element={<BodySpaDetailPage />} />
        <Route path="/wedding-bridal" element={<WeddingBridalPage />} />
        <Route path="/wedding-bridal/:id" element={<WeddingBridalDetailPage />} />
        
        {/* Keeping old service paths for compatibility if needed, or redirecting them */}
        <Route path="/services/skin-treatments" element={<SkinTreatmentsPage />} />
        <Route path="/services/body-spa" element={<BodySpaPage />} />
        <Route path="/services/wedding-bridal" element={<WeddingBridalPage />} />
      </Routes>
    </BrowserRouter>
  )
}
