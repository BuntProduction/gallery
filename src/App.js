import React from 'react';
import AnimatedRectangles from './components/AnimatedRectangles';
import Header from './components/Header';
import ScrollingText from './components/ScrollingText';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <AnimatedRectangles />
        <Header />
        <section>
          <ScrollingText />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <Footer />
    </div>
  );
}

export default App;
