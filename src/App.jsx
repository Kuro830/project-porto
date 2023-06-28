import Navbar from './components/navbarSection';
import HeroSection from './components/heroSection';
import About from './components/aboutSection';
import Portfolio from './components/portfolioSection';
import TechStack from './components/techStackSection';
import Contact from './components/contactSection';
import FooterSection from './components/footerSection';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <About />
            <Portfolio />
            <TechStack />
            <Contact />
            <FooterSection />
        </div>
    );
}

export default App;
