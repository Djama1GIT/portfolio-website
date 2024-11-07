import React from 'react';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Education.module.scss';

interface EducationProps {

}

const Education: React.FC<EducationProps> = () => {
  const { t } = useTranslation();

  const end: string = t('education.end');

  return (
    <div id="education" className={styles["education-container"]}>
      <span className={styles.title}>{t('education.title')}</span>
      <img src="/img/graduation.png" alt="" />
      <div className={styles.education}>
        <div className={styles.school}>
          <div>
            <div>
              <p className={styles["school-title"]}>{`${t('education.shortName')}'${end.slice(-2)}`}</p>
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
