import React from 'react';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Experience.module.scss';

interface ExperienceProps {

}

interface Company {
  image: string;
  name: string;
  period: string;
  tasksTitle: string;
  tasks: string[];
  technologiesTitle: string;
  technologies: string[];
  achievementsTitle: string;
  achievements: string[];
}

const Experience: React.FC<ExperienceProps> = () => {
  const { t } = useTranslation();

  const companies: Company[] = t('experience.companies', { returnObjects: true });

  return (
    <div id="experience" className={styles["experience-container"]}>
      <p className={styles.title}>{t('experience.title')}</p>
      <div className={styles.experience}>
        {companies.map((company: Company) => (
          <div className={styles.company}>
            <img src={company.image} alt="" />
            <p className={styles["company-name"]}>{company.name}</p>
            <p className={styles.period}>{company.period}</p>
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
