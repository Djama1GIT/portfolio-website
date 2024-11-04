import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Education.module.css';

/**
 * The education component. This component is used to display the about block.
 *
 * @returns {JSX.Element} The JSX element representing the education component.
 */
function Education() {

  return (
    <div id="education">
      <h1 class="title">Education</h1>
      <img src="/img/graduation.png" alt="" />
      <div class="university">
        <div class="mtuci">
          <div class="proj-card">
            <div>
              <h1>MTUCI'25</h1>
              <p>
                Moscow Technical University of Communications and Informatics
              </p>
              <p>2021-2025</p>
              <br />
              <p>Faculty of Information Technology</p>
              <p>Major in Informatics and Computer Engineering</p>
              <p>Specialization in Applied Information Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Education);