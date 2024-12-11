import React from "react";
import "./FifthPage.css";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      <h2 className="philosophy-title">Наша Філософія</h2>
      <div className="philosophy-content">
        <div className="philosophy-item">
          <h3>Лідерство разом з ActiveG</h3>
          <p>
            ACTIVE Generation – це ініціативна громадська спільнота, яка сприяє
            всебічному розвитку лідерства серед української молоді та просуває
            ідею неформальної освіти.
          </p>
        </div>
        <div className="philosophy-item">
          <h3>Особисте вдосконалення</h3>
          <p>
            ACTIVE Generation прагне формувати спільноту, яка має бажання до
            вдосконалення свого навчання, особистісного зростання та розвитку
            навичок, які дозволяють їй бути ефективними агентами позитивних
            змін.
          </p>
        </div>
        <div className="philosophy-item">
          <h3>Об'єднуємось та зростаємо разом</h3>
          <p>
            ACTIVE Generation об’єднує сотні молодих та енергійних людей з усіх
            куточків України. Активно працює над зростанням лідерських якостей
            учасників шляхом проведення тренінгів та вебінарів, команда експертів
            допомагає молоді розвивати навички комунікації, прийняття рішень,
            ефективного управління та співпраці.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
