import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

/**
 * The about component. This component is used to display the about block.
 *
 * @returns {JSX.Element} The JSX element representing the about component.
 */
function About() {
  const { t, i18n } = useTranslation();

  return (
    <div id="about" className={styles["about-container"]}>
      <p className={styles.title}>{t('about.title')}</p>
      <img src="/img/man.png" alt="" />
      <div className={styles.about}>
        {t('about.text')}
      </div>
    </div>
  );
}

export default React.memo(About);