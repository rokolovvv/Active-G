import { useTranslation } from "react-i18next";
import '../Header/Header.css'

export default function LngSwitch() {
    const { i18n } = useTranslation();

    const switchLanguage = () => {
        const currentLang = localStorage.getItem("lng") || "ua";
        const newLang = currentLang === "ua" ? "en" : "ua";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lng", newLang);
    };

    const currentLang = localStorage.getItem("lng") || "ua";
    const buttonText = currentLang === "ua" ? "ENG" : "UA";

    return (
        <div>
            <button className="btnLangSwitch" onClick={switchLanguage}>
                {buttonText}
            </button>
        </div>
    );
}
