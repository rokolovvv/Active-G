import './Main.css'

export default function LandingPage() {
    return (
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
          We are a youth and volunteer initiative<br />
          for non-formal education
        </p>
      </div>
      <div className="image">
        <img
          src="/Main.png"
          alt="Group of people"
        />
      </div>
    </section>
    );
}