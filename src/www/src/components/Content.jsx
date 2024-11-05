import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Content.module.css';

import About from './content/About';
import Skills from './content/Skills';
import Experience from './content/Experience';
import Education from './content/Education';

/**
 * The content body component. This component is used to display the content block.
 *
 * @returns {JSX.Element} The JSX element representing the content body component.
 */
function Content() {

  return (
    <div className={styles.cv}>
      <div className={styles.over}>
        <span id="cv" className={styles["cv-title"]}>CV</span>

        <About />
        <Skills />
        <Experience />
        <Education />

      </div>
    </div>
  );
}

export default React.memo(Content);