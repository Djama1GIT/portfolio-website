import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * The footer component. This component is used to display the footer block.
 *
 * @returns {JSX.Element} The JSX element representing the footer component.
 */
function Footer() {

  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.location}>
        <p className={styles.title}>Location</p>
        <p className={styles.address}>Russia, Moscow</p>
      </div>
      <div className={styles["around-the-web"]}>
        <p className={styles.title}>Around The Web</p>
        <a href="https://vk.com/gadjiiavov" className={styles.vk}>
          <img src="/img/vk.png" alt="VK"/>
        </a>
        <a href="https://t.me/gadjiiavov" className={styles.tg}>
          <img src="/img/tg.png" alt="Telegram"/>
        </a>
        <a href="https://github.com/Djama1GIT" className={styles.gh}>
          <img src="/img/gh.png" alt="GitHub"/>
        </a>
      </div>
      <div className={styles.email}>
        <p className={styles.title}>Email</p>
        <p className={styles.address}>
          <a href="mailto:mail@dj.ama1.ru">gadjiiavov@dj.ama1.ru</a>
        </p>
      </div>
    </div>
  );
}

export default React.memo(Footer);