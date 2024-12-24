import Main from "./MainPage/Main";
import Header from "./Header/Header";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";
import SixthPage from "./SixthPage/SixthPage";
import SP from "./SeventhPage/SP";
import EP from './EighthPage/EP';

import {useTranslation} from "react-i18next";
import setHtmlLangAttribute from "./translateResourses/setHtmlLangAttribute";
import {useEffect} from "react";

export default function LandingPage() {
    const { i18n } = useTranslation();

    useEffect(() => {
      setHtmlLangAttribute(i18n.language === "en" ? "en" : "ua");
    }, [i18n.language]);

    return (
        <div>
            <Header/>
            <Main/>
            <SecondPage/>
            <ThirdPage/>
            <FifthPage/>
            <FourthPage/>
            <SixthPage/>
            <SP/>
            <EP/>
        </div>
    );
}