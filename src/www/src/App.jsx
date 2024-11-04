import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);


  return (
    <div className="App">
      <div id="particles-js"></div>
      <div id="header">
        <div class="a-header">
          <a href="#gadjiiavov" class="nav-link">GADJIIAVOV</a>
          <a href="/ru" class="toggle-lang">EN</a>
        </div>
      </div>
      <div id="gadjiiavov"></div>
      <div class="gadjiiavov">
        <div class="some-about">
          <span class="hi">Hi, There!</span><br />
          <span class="name">I'm DJAMAL GADJIIAVOV</span>
          <p class="whoami">Back-end Developer</p>
        </div>
        <div class="me">
          <img src="/img/avatar.png" alt="" />
        </div>
      </div>
      <div class="cv">
        <div class="over">
          <span id="cv">CV</span>

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

          <div id="skills">
            <div>
              <h1 class="title">Skills</h1>
              <img src="/img/arm.png" alt="" />
            </div>
            <div class="skills">
              <ul>
                <li>Python, Java, Go</li>
                <li>HTML, CSS, JavaScript, React</li>
                <li>SQL, PostgreSQL, Redis</li>
                <li>FastAPI, Django, Flask, REST</li>
                And others: Selenium, Aiogram3, Zustand, Celery, Docker, Linux, Git, ReGex ..
              </ul>
            </div>
          </div>

          <div id="education">
            <h1 class="title">Education</h1>
            <img src="/img/graduation.png" alt="" />
            <div class="university">
              <div class="mtuci">
                <div class="proj-card">
                  <div>
                    <h1>MTUCI'25</h1>
                    <p>
                      Moscow Technical University of Communications and Informatics
                    </p>
                    <p>2021-2025</p>
                    <br />
                    <p>Faculty of Information Technology</p>
                    <p>Major in Informatics and Computer Engineering</p>
                    <p>Specialization in Applied Information Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div class="location">
          <h2>Location</h2>
          <h1>Russia, Moscow</h1>
        </div>
        <div class="around-the-web">
          <h2>Around The Web</h2>
          <a href="https://vk.com/gadjiiavov" class="vk"
            ><img src="/img/vk.png" alt="VK"
          /></a>
          <a href="https://t.me/gadjiiavov" class="tg"
            ><img src="/img/tg.png" alt="Telegram"
          /></a>
          <a href="https://github.com/Djama1GIT" class="gh"
            ><img src="/img/gh.png" alt="GitHub"
          /></a>
        </div>
        <div class="email">
          <h2>Email</h2>
          <h1><a href="mailto:mail@dj.ama1.ru">gadjiiavov@dj.ama1.ru</a></h1>
        </div>
      </div>
    </div>
  );
}

export default App;
