import React from 'react';
import "./EP.css";

const FooterSection = () => {
  return (
    <section id="contacts" className='EP'>
      <nav>
        <a className='imp_link' href="https://mail.google.com/mail/?view=cm&fs=1&to=active.generation.official@gmail.com" target="_blank">active.generation.official@gmail.com</a><br>
        </br><a className='imp_link' href="https://www.google.com/maps/place/николаев/data=!4m2!3m1!1s0x40c5cb89fb7213d5:0x970e39fab9e05680?sa=X&ved=1t:155783&ictx=111#">Україна, м. Миколаїв</a>
      </nav>
      <nav>
        <p className='footer_links'>
            <a className='social' href="https://www.instagram.com/active_generation_">Instagram </a>|
            <a className='social' href="https://t.me/active_generation"> Telegram </a>|
            <a className='social' href="https://www.tiktok.com/@active_generation_"> TikTok  </a>|
            <a className='social' href="https://www.youtube.com/@ActiveGeneration"> YouTube </a>|
            <a className='social' href="https://www.facebook.com/profile.php?id=100093272753934"> Facebook </a>
        </p>
        <a className='social' href='https://buymeacoffee.com/activegeneration'>Buy me a coffee</a> | <a className='social' href="https://linktr.ee/active_generation">Linktree</a>
      </nav>
    </section>
  );
};

export default FooterSection;