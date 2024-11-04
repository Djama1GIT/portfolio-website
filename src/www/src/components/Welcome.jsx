import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

/**
 * The welcome component. This component is used to display the welcome block.
 *
 * @returns {JSX.Element} The JSX element representing the welcome component.
 */
function Welcome() {

  return (
    <>
      <div id="gadjiiavov"></div>
      <div class="gadjiiavov">
        <div class="some-about">
          <span class="hi">Hi, There!</span><br />
          <span class="name">I'm DJAMAL GADJIIAVOV</span>
          <p class="whoami">Back-end Developer</p>
        </div>
        <div class="me">
          <img src="/img/avatar.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default React.memo(Welcome);