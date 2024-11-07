import React, { useEffect } from 'react';
import styles from './Main.module.scss';

import Header from "./Header";
import Welcome from "./Welcome";
import Content from "./Content";
import Footer from "./Footer";


function Main() {
  useEffect(() => {
    window.particlesJS.load('particles-js', 'particles.json');
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div id="particles-js"></div>
        <Header/>
        <Welcome/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default React.memo(Main);
