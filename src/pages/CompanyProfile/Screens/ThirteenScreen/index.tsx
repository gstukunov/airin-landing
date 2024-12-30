import letter from "../../../../assets/images/letter-replacer.png";

const ThirteenScreen = () => {
    return (
        <div className={'w-full px-5 min-h-screen py-28 xl:py-0'}>
            <div
                className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                <span className={"relative right-0.5 bottom-1.5"}>5</span>
            </div>
            <div className={"flex md:items-center justify-between max-w-[1440px] mx-auto flex-col xl:flex-row gap-6 px-5 xl:gap-10"}>
                <div className={"text-left"}>
                    <h2 className={"md:text-[70px] text-4xl md:leading-normal leading-light font-bold flex items-center"}>РЕВЕРС-<br/>
                        ИНЖИНИРИНГ<br/>
                    </h2>
                    <h2 className={"md:text-[70px] text-4xl leading-none font-bold flex items-center mb-5"}>
                        П<img src={letter} className={"md:w-16 md:h-16 h-10 w-10 relative md:top-2 top-1"} alt={""}/>
                    </h2>
                </div>
                <div
                    className={"bg-[#171c2b] px-8 py-10 text-2xl md:min-w-[700px] w-full md:max-w-[700px] border-t-4 border-[#4c39a0]"}>
                    <h4 className={"border-b pb-5 border-gray-600 text-left w-fit"}>
                        ДЛЯ КАКИХ СЦЕНАРИЕВ ПОДОЙДЁТ:
                    </h4>
                    <ul className={"w-full text-left text-2xl list-disc pt-10 flex flex-col gap-6"}>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Необходимо проверить ПО на наличие программных «закладок», удостовериться в его надежности для использования
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Требуется оценить степень защиты разработанного ПО от возможного «плагиата», воровства интеллектуальной собственности
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Реализована целевая атака, необходимо провести ручной анализ кода вредоносного ПО, установить индикаторы компрометации, логику его работы
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Ограничение функционала/доработка ПО без возможности внесения изменений в исходный код (*исходный код утерян)
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThirteenScreen;
