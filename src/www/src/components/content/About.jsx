import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

/**
 * The about component. This component is used to display the about block.
 *
 * @returns {JSX.Element} The JSX element representing the about component.
 */
function About() {

  return (
    <div id="about">
      <h1 class="title">About me</h1>
      <img src="/img/man.png" alt="" />
      <div class="about">
        I realized I wanted to be a programmer at the age of 12,
        and I think this is a lifelong passion! With burning eyes,
        I gaze at Python back-end,
        but I'm also always ready to engage in something related
        or learn something new,
        because deep inside I feel like a true engineer!
        <br />
        <br />
        <div>I'd be happy about any acquaintances!</div>
      </div>
    </div>
  );
}

export default React.memo(About);