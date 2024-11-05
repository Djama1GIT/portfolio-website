import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Experience.module.css';

/**
 * The experience component. This component is used to display the experience block.
 *
 * @returns {JSX.Element} The JSX element representing the experience component.
 */
function Experience() {
  const experienceData = {
    title: "Experience",
    companies: [
      {
        name: "ООО «АВМ-Энерго» (Автоматизация и мониторинг в энергетике)",
        link: "https://www.avmenergo.ru/",
        image: "/img/station.png",
        period: "06.2024 — 10.2024",
        tasks: [
          "Разработка конфигуратора энергетического оборудования",
          "Обеспечение оптимизации нагрузки на оборудование",
          "Поддержка продукта, багофикс, рефакторинг",
          "Написание технической документации",
        ],
        technologies: [
          "Python/FastAPI для back-енда",
          "lxml, zipfile для хранения конфигурации",
          "JS/React для front-енда",
        ],
        achievements: [
          "Написал автоматический билд приложения при помощи GitHub Actions workflows и Docker (для различных ОС и архитектур)"
        ]
      },
    ]
  };

  return (
    <div id="experience" className={styles["experience-container"]}>
      <p className={styles.title}>{experienceData.title}</p>
      <div className={styles.experience}>
        {experienceData.companies.map((company) => (
          <div className={styles.company}>
            <img src={company.image} alt="" />
            <p className={styles["company-name"]}>{company.name}</p>
            <p className={styles.period}>{company.period}</p>{/* TODO: CSS */}
            <p className={styles.subtitle}>Tasks:</p>
            <ul>
              {company.tasks.map((task) => (
                <li>{task}</li>
              ))}
            </ul>
            <div className={styles["technologies-container"]}>
              <p className={styles.subtitle}>Used technologies:</p>
              <ul className={styles.technologies}>
                {company.technologies.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
            <div className={styles["achievements-container"]}>
              <p className={styles.subtitle}>Achievements:</p>
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