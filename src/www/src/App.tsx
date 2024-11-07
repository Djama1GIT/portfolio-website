import React, { useEffect } from 'react';
import './App.css';
import Main from './components/Main';

// Declare the particlesJS interface
declare global {
  interface Window {
    particlesJS: any;
  }
}

function App() {
  useEffect(() => {
    window.particlesJS.load('particles-js', 'particles.json');
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default React.memo(App);
