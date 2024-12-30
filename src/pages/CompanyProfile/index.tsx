import style from "./style.module.scss";
import FirstScreen from "./Screens/FirstScreen";
import SecondScreen from "./Screens/SecondScreen";
import ThirdScreen from "./Screens/ThirdScreen";
import FourthScreen from "./Screens/FourthScreen";
import FifthScreen from "./Screens/FifthScreen";
import SixScreen from "./Screens/SixScreen";
import SevenScreen from "./Screens/SevenScreen";
import NineScreen from "./Screens/NineScreen";
import ElevenScreen from "./Screens/ElevenScreen";
import ThirteenScreen from "./Screens/ThirteenScreen";
import FourteenScreen from "./Screens/FourteenScreen";
import FifteenScreen from "./Screens/FifteenScreen";
import EightScreen from "./Screens/EightScreen";
import TenScreen from "./Screens/TenScreen";

export const CompanyProfile = () => {

    return (
        <main className={style.main}>
            <FirstScreen/>
            <SecondScreen/>
            <ThirdScreen/>
            <FourthScreen/>
            <FifthScreen/>
            <SixScreen/>
            <SevenScreen/>
            <EightScreen/>
            <NineScreen/>
            <TenScreen/>
            <ElevenScreen/>
            <ThirteenScreen/>
            <FourteenScreen/>
            <FifteenScreen/>
        </main>
    );
};
