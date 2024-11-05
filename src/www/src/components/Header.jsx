import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * The header component. This component is used to display the header block.
 *
 * @returns {JSX.Element} The JSX element representing the header component.
 */
function Header() {

  return (
    <div id={styles.header}>
      <div className={styles["a-header"]}>
        <a href="#gadjiiavov" class="nav-link">GADJIIAVOV</a>
        <a href="/ru" className={styles["toggle-lang"]}>EN</a>
      </div>
    </div>
  );
}

export default React.memo(Header);