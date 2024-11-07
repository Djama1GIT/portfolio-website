import React from 'react';
import '../i18n/config';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();

  return (
    <div id="footer" className={styles.footer}>
      <div className={styles.location}>
        <p className={styles.title}>{t('footer.location.title')}</p>
        <p className={styles.address}>{t('footer.location.address')}</p>
      </div>
      <div className={styles['around-the-web']}>
        <p className={styles.title}>{t('footer.aroundTheWeb.title')}</p>
          <div className={styles.links}>
            <a href="https://vk.com/gadjiiavov" className={styles.link}>
              <img src="/img/vk.png" alt="VK"/>
            </a>
            <a href="https://t.me/gadjiiavov" className={styles.link}>
              <img src="/img/tg.png" alt="Telegram"/>
            </a>
            <a href="https://github.com/Djama1GIT" className={styles.link}>
              <img src="/img/gh.png" alt="GitHub"/>
            </a>
          </div>
      </div>
        <div className={styles.email}>
            <p className={styles.title}>{t('footer.email.title')}</p>
            <p className={styles.address}>
                <a href="mailto:mail@dj.ama1.ru">{t('footer.email.address')}</a>
            </p>
        </div>
    </div>
  );
};

export default React.memo(Footer);