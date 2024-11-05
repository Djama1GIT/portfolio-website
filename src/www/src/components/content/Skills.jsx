import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';

/**
 * The skills component. This component is used to display the skills block.
 *
 * @returns {JSX.Element} The JSX element representing the skills component.
 */
function Skills() {
  const { t } = useTranslation();

  return (
    <div id="skills" className={styles["skills-container"]}>
      <div>
        <span className={styles.title}>{t('skills.title')}</span>
        <img src={t('skills.imageSrc')} alt="" />
      </div>
      <div className={styles.skills}>
        <ul>
          {t('skills.skillsList', { returnObjects: true }).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Skills);