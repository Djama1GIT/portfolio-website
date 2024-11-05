import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Experience.module.css';

/**
 * The experience component. This component is used to display the experience block.
 *
 * @returns {JSX.Element} The JSX element representing the experience component.
 */
function Experience() {
  const { t } = useTranslation();

  return (
    <div id="experience" className={styles["experience-container"]}>
      <p className={styles.title}>{t('experience.title')}</p>
      <div className={styles.experience}>
        {t('experience.companies', { returnObjects: true }).map((company) => (
          <div className={styles.company}>
            <img src={company.image} alt="" />
            <p className={styles["company-name"]}>{company.name}</p>
            <p className={styles.period}>{company.period}</p>{/* TODO: CSS */}
            <p className={styles.subtitle}>{company.tasksTitle}:</p>
            <ul>
              {company.tasks.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
            <div className={styles["technologies-container"]}>
              <p className={styles.subtitle}>{company.technologiesTitle}:</p>
              <ul className={styles.technologies}>
                {company.technologies.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
            <div className={styles["achievements-container"]}>
              <p className={styles.subtitle}>{company.achievementsTitle}:</p>
              <ul className={styles.achievements}>
                {company.achievements.map((achievement) => (
                  <li>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Experience);