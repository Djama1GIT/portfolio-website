import React from 'react';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { smoothScroll } from '../utils';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const { i18n } = useTranslation();
  const resources = i18n.options?.resources && typeof i18n.options.resources === 'object'
    ? Object.keys(i18n.options.resources)
    : [];

  const locale = resources.indexOf(i18n.language);
  const nextLocale = locale + 1 < resources.length ? locale + 1 : 0;  // fixme


  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const scrollToTop = () => {
    if (window.scrollY < 10) return;
    smoothScroll(`#${styles.header}`, 1337);
  };

  const switchLanguage = () => {
    changeLanguage(resources[nextLocale]);
  };

  return (
    <header id={styles.header}>
      <div className={styles['a-header']}>
        <p className={styles.gadjiiavov} onClick={scrollToTop}>
          GADJIIAVOV
        </p>
        <span className={styles['toggle-lang']} onClick={switchLanguage}>
          {resources[locale].toUpperCase()}
        </span>
      </div>
    </header>
  );
};

export default React.memo(Header);