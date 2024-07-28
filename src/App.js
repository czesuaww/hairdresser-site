import './App.css';
import Header from './components/Header/Header.js';
import AboutMe from './components/About/About';
import Offers from './components/Offers/Offers.js';
import Gallery from './components/Gallery/Gallery.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Offers/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>    
  );
}

export default App;
