import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Skills.module.css';

/**
 * The skills component. This component is used to display the skills block.
 *
 * @returns {JSX.Element} The JSX element representing the skills component.
 */
function Skills() {

  return (
    <div id="skills">
      <div>
        <h1 class="title">Skills</h1>
        <img src="/img/arm.png" alt="" />
      </div>
      <div class="skills">
        <ul>
          <li>Python, Java, Go</li>
          <li>HTML, CSS, JavaScript, React</li>
          <li>SQL, PostgreSQL, Redis</li>
          <li>FastAPI, Django, Flask, REST</li>
          And others: Selenium, Aiogram3, Zustand, Celery, Docker, Linux, Git, ReGex ..
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Skills);