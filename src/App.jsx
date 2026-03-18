import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Projects from "./components/Projects"
import ServicesSection from "./components/ServicesSection"
import StatsSection from "./components/StatsSection"

function App() {
  return (
    <div className="min-h-screen bg-white box-content">
      <Header/>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <Projects />
      <Footer/>
    </div>
  )
}

export default App
