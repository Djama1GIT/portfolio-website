import React from 'react';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Content.module.scss';

import About from './content/About';
import Skills from './content/Skills';
import Experience from './content/Experience';
import Education from './content/Education';

interface ContentProps {

}

const Content: React.FC<ContentProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cv}>
      <div className={styles.over}>
        <span id="cv" className={styles["cv-title"]}>{t('content.title')}</span>

        <About />
        <Skills />
        <Experience />
        <Education />

      </div>
    </div>
  );
};

export default React.memo(Content);
