import React from 'react';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Skills.module.scss';

interface SkillsProps {

}

const Skills: React.FC<SkillsProps> = () => {
  const { t } = useTranslation();

  const skills: string[] = t('skills.skillsList', { returnObjects: true });

  return (
    <div id="skills" className={styles["skills-container"]}>
      <div>
        <span className={styles.title}>{t('skills.title')}</span>
        <img src={t('skills.imageSrc')} alt="" />
      </div>
      <div className={styles.skills}>
        <ul>
          {skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Skills);