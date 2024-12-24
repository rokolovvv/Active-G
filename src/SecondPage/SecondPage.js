import React from 'react';
import './SecondPage.css';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {

  const { t } = useTranslation("translation", { keyPrefix: "about" });

  return (
    <section id="about-us" className="landing-page">
      <div className="header2">
        <h1 className="main-title">
          ACTIVE G
        </h1>
      </div>

      <div className="page">
      <div className='line'></div>
        <div className="column">
          <h2 className="column-title">{t("aboutMetaTitle")}</h2>
          <p className="column-text">
            {t("aboutMeta1")}
            <br />
            <br />
            {t("aboutMeta2")}
            <br />
            <br />
            {t("aboutMeta3")}
          </p>
        </div>

        <div className="column">
          <h2 className="column-title">{t("aboutVolunteerTitle")}</h2>
          <p className="column-text">
            {t("aboutVolunteer")}
          </p>
        </div>

        <div className="column">
          <h2 className="column-title">{t("aboutValuesTitle")}</h2>
          <p className="column-text">
            {t("aboutValues")}
          </p>
        </div>
      </div>

      <div className="footer-image">
        <img src="/People.png" alt="Команда Active Generation" />
      </div>
    </section>
  );
}
