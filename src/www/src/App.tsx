import React, {useEffect} from 'react';
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

    const handleMouseMove = (event: any) => {
      updateMousePosition(event);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const updateMousePosition = (event: any) => {
      const {clientX, clientY} = event;

      const cursor = document.getElementById('circularcursor');
      if (cursor) {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    };


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default React.memo(App);
