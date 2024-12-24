import React from "react";
import "./FifthPage.css";
import { useTranslation } from "react-i18next";

const PhilosophySection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "philosophy" });

  return (
    <section id="philosophy" className="philosophy-section">
      <h2 className="philosophy-title">{t("philosophyTitle")}</h2>
      <div className="philosophy-content">
        <div className="philosophy-item">
          <h3>{t("leadershipTitle")}</h3>
          <p>{t("leadershipText")}</p>
        </div>
        <div className="philosophy-item">
          <h3>{t("selfImprovementTitle")}</h3>
          <p>{t("selfImprovementText")}</p>
        </div>
        <div className="philosophy-item">
          <h3>{t("unityTitle")}</h3>
          <p>{t("unityText")}</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
