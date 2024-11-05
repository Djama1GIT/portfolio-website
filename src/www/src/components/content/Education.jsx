import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Education.module.css';

/**
 * The education component. This component is used to display the about block.
 *
 * @returns {JSX.Element} The JSX element representing the education component.
 */
function Education() {
  const { t, i18n } = useTranslation();

  return (
    <div id="education" className={styles["education-container"]}>
      <span className={styles.title}>{t('education.title')}</span>
      <img src="/img/graduation.png" alt="" />
      <div className={styles.university}>
        <div className={styles.mtuci}>
          <div>
            <div>
              <p className={styles.title}>{t('education.shortName')}'{t('education.end').slice(-2)}</p>
              <div>{t('education.universityName')}</div>
              <div>{t('education.start')} — {t('education.end')}</div>
              <br />
              <div>{t('education.faculty')}</div>
              <div>{t('education.major')}</div>
              <div>{t('education.specialization')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Education);