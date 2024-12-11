import Main from "./MainPage/Main";
import Header from "./Header/Header";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FifthPage from "./FifthPage/FifthPage";
import SixthPage from "./SixthPage/SixthPage";
import SP from "./SeventhPage/SP";
import EP from './EighthPage/EP'

export default function LandingPage() {
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