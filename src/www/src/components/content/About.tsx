import React from 'react';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className={styles["about-container"]}>
      <p className={styles.title}>{t('about.title')}</p>
      <img src="/img/man.png" alt="" />
      <div className={styles.about}>
        {t('about.text')}
      </div>
    </div>
  );
};

export default React.memo(About);
