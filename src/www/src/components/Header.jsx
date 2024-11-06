import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import { smoothScroll } from '../utils';

/**
 * The header component. This component is used to display the header block.
 *
 * @returns {JSX.Element} The JSX element representing the header component.
 */
function Header() {
  const { i18n } = useTranslation();
  const locale = i18n.options.languages.indexOf(i18n.language);
  const nextLocale = locale + 1 < i18n.options.languages.length ? locale + 1 : 0;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const scrollToTop = () => {
    if (window.scrollY < 10) return;
    smoothScroll(`#${CSS.escape(styles.header)}`, 1337);
  };

  const switchLanguage = () => {
    changeLanguage(i18n.options.languages[nextLocale])
  };

  return (
    <div id={styles.header}>
      <div className={styles["a-header"]}>
        <p className={`nav-link ${styles.gadjiiavov}`} onClick={scrollToTop}>
          GADJIIAVOV
        </p>
        <span className={styles["toggle-lang"]} onClick={switchLanguage} >
          {i18n.options.languages[locale].toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export default React.memo(Header);