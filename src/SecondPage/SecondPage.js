import React from 'react';
import './SecondPage.css';

export default function LandingPage() {
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
          <h2 className="column-title">Мета</h2>
          <p className="column-text">
            - зробити молодь України більш успішною, амбіційною та пристосованою до змін за допомогою проведення проектів, зустрічей та ініціатив;
            <br />
            <br />
            - збудувати спільноту освічених лідерів, які змінюватимуть світ;
            <br />
            <br />
            - підштовхнути світ до змін та реалізації ідей за допомогою ініціатив, які ми створюємо.
          </p>
        </div>

        <div className="column">
          <h2 className="column-title">Волонтерство</h2>
          <p className="column-text">
            Наші круті тіммейти створюють потужну силу інновацій, які з великою мотивацією розвивають молодіжний рух, використовуючи власний досвід, знання, можливості та свої здібності.
          </p>
        </div>

        <div className="column">
          <h2 className="column-title">Цінності</h2>
          <p className="column-text">
            ACTIVE Generation пропонує спробувати свої сили у різних напрямках волонтерства від менторів до СММ. Для нашої команди важливо, аби кожен тіммейт проявляв свою ініціативність, експертність та відданість своїй справі.
          </p>
        </div>
      </div>

      <div className="footer-image">
        <img src="/People.png" alt="Команда Active Generation" />
      </div>
    </section>
  );
}
