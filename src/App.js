import './App.css';
import Header from './components/Header/Header.js';
import AboutMe from './components/About/About';
import Offers from './components/Offers/Offers.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Offers/>
    </div>    
  );
}

export default App;
