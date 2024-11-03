// src/App.jsx

import 'react';
import Navbar from './components/Navbar';
import CarouselAds from './components/CarouselAds';
import Tabs from './components/Tabs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aside from './components/Aside';
import './App.css';

function App() {
  return (
    <div> 
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          {/* Main Column */}
          <div className="col-lg-9">
            <CarouselAds />
            <Tabs />
          </div>

          {/* Aside Column */}
          <div className="col-lg-3">
            <Aside />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;





