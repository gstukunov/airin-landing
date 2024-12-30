const FifthScreen = () => {
    return (
        <div className={'w-full min-h-screen py-28'}>
            <div className={"flex items-center justify-start flex-col lg:flex-row gap-6 lg:gap-0 w-full"}>
                <div className={"flex flex-col gap-6 w-full"}>
                    <div className={"flex lg:gap-24 gap-12 flex-col lg:flex-row items-center"}>
                        <div className={"bg-[#4c39a0] text-right p-5 ps-10 text-3xl lg:min-w-[400px] w-full lg:max-w-[400px]"}>
                            СБОР<br/>
                            ИНФОРМАЦИИ
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Согласование обьема работ
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Получение необходимой информации об объекте исследования
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex lg:gap-24 gap-12 flex-col lg:flex-row items-center"}>
                        <div className={"bg-[#4c39a0] text-right p-5 ps-10 text-3xl lg:min-w-[400px] w-full lg:max-w-[400px]"}>
                            ПОИСК<br/>
                            УЯЗВИМОСТЕЙ
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Поиск в ручном и автоматическом режимах
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Анализ результатов
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Ручная верификация уязвимостей
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex lg:gap-24 gap-12 flex-col lg:flex-row items-center"}>
                        <div className={"bg-[#4c39a0] text-right p-5 ps-10 text-3xl lg:min-w-[400px] w-full lg:max-w-[400px]"}>
                            ЭКСПЛУАТАЦИЯ УЯЗВИМОСТЕЙ
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Поиск эксплойтов для обнаруженных уязвимостей
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Моделирование атак
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Анализ последствий
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex lg:gap-24 gap-12 flex-col lg:flex-row items-center"}>
                        <div
                            className={"bg-[#4c39a0] text-right p-5 ps-10 text-3xl lg:min-w-[400px] w-full lg:max-w-[400px]"}>
                            РАЗРАБОТКА РЕКОМЕНДАЦИЙ
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Описание выявленных уязвимостей и векторов атак
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Рекомендации по устранению уязвимостей и ошибок конфигурации
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={"flex lg:gap-24 gap-12 flex-col lg:flex-row items-center"}>
                        <div
                            className={"bg-[#4c39a0] text-right p-5 ps-10 text-3xl lg:min-w-[400px] w-full lg:max-w-[400px]"}>
                            ПОДГОТОВКА<br/>
                            ОТЧЕТА
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Аналитические выводы для руководства
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Систематизация возможных атак и уязвимостей
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Детальные технические результаты
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthScreen;
