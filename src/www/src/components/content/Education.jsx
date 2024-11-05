import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Education.module.css';

/**
 * The education component. This component is used to display the about block.
 *
 * @returns {JSX.Element} The JSX element representing the education component.
 */
function Education() {
  const educationData = {
    title: "Education",
    start: "2021",
    end: "2025",
    shortName: "MTUCI",
    universityName: "Moscow Technical University of Communications and Informatics",
    faculty: "Faculty of Information Technology",
    major: "Major in Informatics and Computer Engineering",
    specialization: "Specialization in Applied Information Systems"
  };

  return (
    <div id="education" className={styles["education-container"]}>
      <span className={styles.title}>{educationData.title}</span>
      <img src="/img/graduation.png" alt="" />
      <div className={styles.university}>
        <div className={styles.mtuci}>
          <div>
            <div>
              <p className={styles.title}>{educationData.shortName}'{educationData.end.slice(-2)}</p>
              <div>{educationData.universityName}</div>
              <div>{educationData.start} - {educationData.end}</div>
              <br />
              <div>{educationData.faculty}</div>
              <div>{educationData.major}</div>
              <div>{educationData.specialization}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Education);