import React from "react";
import "./SixthPage.css"; // Підключення стилів

const CardSection = () => {
  const cards = [
    {
      title: "Стати Координатором Партнерств в AG",
      date: "2024-11-01/2025-11-01",
      organization: "ACTIVE Generation",
    },
    {
      title: "Приєднуйся до Вмотивованої Команди CMM ACTIVE Generation",
      date: "2024-11-13/2025-02-18",
      organization: "ACTIVE Generation",
    },
    {
      title: "Долучайся до ACTIVE G Dialogues",
      date: "2024-08-21/2025-12-11",
      organization: "ACTIVE Generation",
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
