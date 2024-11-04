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
    <div id="footer">
      <div class="location">
        <h2>Location</h2>
        <h1>Russia, Moscow</h1>
      </div>
      <div class="around-the-web">
        <h2>Around The Web</h2>
        <a href="https://vk.com/gadjiiavov" class="vk">
          <img src="/img/vk.png" alt="VK"/>
        </a>
        <a href="https://t.me/gadjiiavov" class="tg">
          <img src="/img/tg.png" alt="Telegram"/>
        </a>
        <a href="https://github.com/Djama1GIT" class="gh">
          <img src="/img/gh.png" alt="GitHub"/>
        </a>
      </div>
      <div class="email">
        <h2>Email</h2>
        <h1>
          <a href="mailto:mail@dj.ama1.ru">gadjiiavov@dj.ama1.ru</a>
        </h1>
      </div>
    </div>
  );
}

export default React.memo(Footer);