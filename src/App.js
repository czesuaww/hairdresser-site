import './App.css';
import Header from './components/Header/Header.js';
import AboutMe from './components/About/About';
import Offers from './components/Offers/Offers.js';
import Gallery from './components/Gallery/Gallery.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Offers/>
      <Gallery/>
    </div>    
  );
}

export default App;
