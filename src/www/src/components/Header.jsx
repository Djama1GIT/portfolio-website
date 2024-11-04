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
    <div id="header">
      <div class="a-header">
        <a href="#gadjiiavov" class="nav-link">GADJIIAVOV</a>
        <a href="/ru" class="toggle-lang">EN</a>
      </div>
    </div>
  );
}

export default React.memo(Header);