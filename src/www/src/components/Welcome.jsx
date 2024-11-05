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
      <div className={styles.gadjiiavov}>
        <div className={styles["some-about"]}>
          <span className={styles.hi}>Hi, There!</span><br />
          <span className={styles.name}>I'm DJAMAL GADJIIAVOV</span>
          <p className={styles.whoami}>Back-end Developer</p>
        </div>
        <div className={styles.me}>
          <img src="/img/avatar.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default React.memo(Welcome);