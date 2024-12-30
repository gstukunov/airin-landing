import letter from "../../../../assets/images/letter-replacer.png";

const SevenScreen = () => {
    return (
        <div className={'w-full px-5 min-h-screen py-28 xl:py-0'}>
            <div
                className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                <span className={"relative right-0.5 bottom-1.5"}>2</span>
            </div>
            <div className={"flex mx-auto items-center max-w-[1440px] justify-between flex-col xl:flex-row gap-6 px-5 xl:gap-10"}>
                <div className={"text-left"}>
                    <h2 className={"md:text-[70px] text-4xl leading-none font-bold flex items-center"}>ПР
                        <img src={letter} className={"md:w-16 md:h-16 w-10 h-10 relative md:top-2 top-1"} alt={""}/>ВЕРКА
                    </h2>
                    <h2 className={"md:text-[70px] text-4xl mb-5 leading-none font-bold"}>ГОТОВНОСТИ</h2>
                    <span className={"md:text-3xl text-2xl text-[#5d5a7e]"}>
                        К РЕАГИРОВАНИЮ НА ИНЦИДЕНТЫ ИБ (REDTEAM)
                    </span>
                </div>
                <div className={"bg-[#171c2b] px-8 py-10 text-2xl md:min-w-[700px] md:max-w-[700px] border-t-4 border-[#4c39a0]"}>
                    <h4 className={"border-b pb-5 border-gray-600 text-left w-fit"}>
                        ЧТО ПОЗВОЛЯЕТ УСТАНОВИТЬ:
                    </h4>
                    <ul className={"w-full text-left text-2xl list-disc pt-10 flex flex-col gap-6"}>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Как быстро SOC выявил угрозу?
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Какой объём инфраструктуры удалось скомпрометировать до момента локализации источника угрозы?
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Корректность настройки имеющихся СЗИ
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Эффективность взаимодействия подразделений компании в рамках реагирования на инцидент ИБ
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Какие процессы необходимо доработать, какие СЗИ внедрить для закрытия реализованного вектора атаки
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SevenScreen;
