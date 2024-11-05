import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

/**
 * The welcome component. This component is used to display the welcome block.
 *
 * @returns {JSX.Element} The JSX element representing the welcome component.
 */
function Welcome() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div id="gadjiiavov"></div>
      <div className={styles.gadjiiavov}>
        <div className={styles["some-about"]}>
          <span className={styles.hi}>{t('welcome.hi')}</span><br />
          <span className={styles.name}>{t('welcome.name')}</span>
          <p className={styles.whoami}>{t('welcome.whoami')}</p>
        </div>
        <div className={styles.me}>
          <img src="/img/avatar.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default React.memo(Welcome);