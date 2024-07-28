import './App.css';
import Header from './components/Header/Header.js';
import AboutMe from './components/About/About';
import Offers from './components/Offers/Offers.js';
import Gallery from './components/Gallery/Gallery.js';
import Contact from './components/Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Offers/>
      <Gallery/>
      <Contact/>
    </div>    
  );
}

export default App;
