import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Content.module.css';

import About from './content/About';
import Skills from './content/Skills';
import Education from './content/Education';

/**
 * The content body component. This component is used to display the content block.
 *
 * @returns {JSX.Element} The JSX element representing the content body component.
 */
function Content() {

  return (
    <div class="cv">
      <div class="over">
        <span id="cv">CV</span>

        <About />
        <Skills />
        <Education />

      </div>
    </div>
  );
}

export default React.memo(Content);