import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Welcome from './components/Welcome';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.particlesJS.load('particles-js', 'particles.json');
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>
      <Header />
      <Welcome />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
