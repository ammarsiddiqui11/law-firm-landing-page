import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
// import TrustBadges from './components/TrustBadges.jsx'
import About from './components/About.jsx'
import PracticeAreas from './components/PracticeAreas.jsx'
import Process from './components/Process.jsx'
import Team from './components/Team.jsx'
import Careers from './components/Careers.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Disclaimer from './components/Disclaimer.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Disclaimer />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      {/* <TrustBadges /> */}
      <About />
      <PracticeAreas />
      <Process />
      <Team />
      <Careers />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
