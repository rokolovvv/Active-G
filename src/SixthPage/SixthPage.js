import React from "react";
import "./SixthPage.css";
import { useTranslation } from "react-i18next";

const CardSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "cardSection" });

  const cards = [
    {
      title: t("title1"),
      date: t("date1"),
      organization: t("organization1"),
    },
    {
      title: t("title2"),
      date: t("date2"),
      organization: t("organization2"),
    },
    {
      title: t("title3"),
      date: t("date3"),
      organization: t("organization3"),
    },
  ];

  return (
    <a id="join" className="card-section">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <img src="./AGlogo.webp" alt="Logo" className="logo" />
            <p className="card-date">{card.date}</p>
          </div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-organization">{card.organization}</p>
        </div>
      ))}
    </a>
  );
};

export default CardSection;
