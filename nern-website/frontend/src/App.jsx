import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ErrorBoundary from "./components/ErrorBoundary"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingCTA from "./components/FloatingCTA"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
