import React from 'react';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.scss';

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = () => {
  const { t } = useTranslation();

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
};

export default React.memo(Welcome);
