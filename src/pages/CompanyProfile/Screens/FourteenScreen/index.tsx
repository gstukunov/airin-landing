import first from "../../../../assets/images/firstList.png";
import second from "../../../../assets/images/secondList.png";
import third from "../../../../assets/images/thirdList.png";

const FourteenScreen = () => {
    return (
        <div className={'w-full px-5 min-h-screen py-5'}>
            <div
                className={"flex items-center justify-between max-w-[1440px] mx-auto flex-col xl:flex-row gap-6 px-5 xl:gap-10"}>
                <div className={"text-left"}>
                    <h2 className={"text-5xl leading-light font-bold flex items-center mb-5"}>
                        ЧТО МЫ РЕАЛИЗУЕМ В РАМКАХ ОКАЗАНИЯ УСЛУГИ:
                    </h2>
                </div>
                <div
                    className={"md:px-8 py-10 text-2xl md:min-w-[700px] md:max-w-[700px]"}>
                    <ul className={"w-full text-left text-2xl pt-10 flex flex-col gap-10"}>
                        <li className={"flex items-center md:gap-10 gap-5"}>
                            <img className={"h-24"} src={first} alt=""/>
                            <span className={"text-white"}>
                                Необходимо проверить ПО на наличие программных «закладок», удостовериться в его надежности для использования
                            </span>
                        </li>
                        <li className={"flex items-center md:gap-10 gap-8"}>
                            <img className={"h-24"} src={second} alt=""/>
                            <span className={"text-white"}>
                                Отчёт исследования образца ВПО будет содержать детальное описание функционала, перечень индикаторов компрометации и наши рекомендации позволят блокировать активность ВПО, реализовать правила детектирования на подконтрольных Заказчику СЗИ для превентивной защиты от угрозы
                            </span>
                        </li>
                        <li className={"flex items-center md:gap-8 gap-5"}>
                            <img className={"h-24 relative right-2"} src={third} alt=""/>
                            <span className={"text-white"}>
                                Анализ ПО Заказчика с утраченным исходным кодом позволит сформировать ТЗ по доработке его функционала, а также внести изменение в логику его работы по средствам «патчинга» исполняемого файла
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FourteenScreen;
