import React, {useEffect, useState} from "react";
import style from "../../style.module.scss";
import bckg from "../../../../assets/images/space_bg.jpg";
import logo from "../../../../assets/images/airin_hero.png";
import airin from "../../../../assets/images/logo.svg";

const FirstScreen = () => {
    const [isAnimDelayed, setAnimDelayed] = useState<boolean>(false);

    useEffect(() => {
        setAnimDelayed(true);
    }, []);
    useEffect(() => {
        setInterval(() => {
            setAnimDelayed(!isAnimDelayed);
        }, 8000);
    }, [isAnimDelayed]);
    return (
        <div className={style.mainPage__container}>
            <div>
                <div className={style.glitch}>
                    <img src={bckg} className={style.background__space} alt=""/>
                    {isAnimDelayed && (
                        <div className={style.glitch__layers}>
                            <div className={style.glitch__layer}></div>
                            <div className={style.glitch__layer}></div>
                        </div>
                    )}
                </div>
                <img src={logo} className={style.airin} alt=""/>
                <div
                    className="absolute z-[1000] bottom-0 left-0 h-full text-white ps-10 pt-8 pb-[10%] flex flex-col justify-between">
                    <a href="/">
                        <img src={airin} className={"h-24"} alt=""/>
                    </a>
                    <div className={"w-full text-left flex flex-col gap-4"}>
                        <h1 className={"md:text-[160px] text-4xl leading-none font-normal"}>AIRIN <br/>
                            SECURITY</h1>
                        <p className={"md:text-4xl text-3xl"}>Портфель услуг</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FirstScreen;
