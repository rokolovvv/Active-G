import './Main.css'
import { useTranslation } from "react-i18next";

export default function LandingPage() {

  const { t } = useTranslation("translation", { keyPrefix: "main" });

    return (
    <main className='main'>
      <section href="#aboutus" className="hero">
        <div className="content">
          <h1 className="title">
            ACTIVE<br/>
            <span>GENERATION</span>
          </h1>
          <div className="social-icons">
              <a href='#philosophy' className="read-more">READ MORE</a>
              <a
                  className='main_icon'
                  href="https://www.instagram.com/active_generation_"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img className='inst_icon' src={"./instagram.svg"} alt="Instagram"/>
              </a>
              <a
                  className='main_icon'            
                  href="https://t.me/active_generation"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img className='tg_icon' src={'./telegram.svg'} alt="Telegram"/>
              </a>
          </div>
          <p className="description">
            {t("activeGAboutInfo")}
          </p>
        </div>
        <div className="image">
          <img
            src="/Main.png"
            alt="Group of people"
          />
        </div>
      </section>
    </main>
    );
}