const TenScreen = () => {
    return (
        <div className={'w-full min-h-screen py-28 px-10 xl:py-0'}>
            <div className={"flex items-center justify-center flex-col xl:flex-row gap-10"}>
                <div>
                    <h2 className={"text-5xl leading-light font-normal text-left mb-20"}>
                        ЧТО МЫ РЕАЛИЗУЕМ В РАМКАХ ОКАЗАНИЯ УСЛУГИ:
                    </h2>
                    <span className={"text-xl"}>
                        «чек» за услугу от 4 500 000 Руб.
                    </span>
                </div>
                <div className={"flex flex-wrap gap-20 max-w-[1000px]"}>
                    <div>
                        <div className={"bg-[#4c39a0] rounded-xl w-fit flex flex-col items-center justify-center p-8"}>
                            <span className={"text-xl font-normal"}>
                                Легитимный доступ «пока» есть
                            </span>
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc pt-10 pl-6 flex flex-col gap-6"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Легитимно «выгрузим» сведения, содержащиеся в ИС
                                </span>
                            </li>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Спроектируем и реализуем проект по локализации бизнес-процесса с использованием полученной информации
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={"bg-[#4c39a0] rounded-xl w-fit flex flex-col items-center justify-center p-8"}>
                            <span className={"text-xl font-normal"}>
                                Доступ к ресурсу/ПО ограничен
                            </span>
                        </div>
                        <ul className={"w-full text-left text-2xl list-disc pt-10 pl-6 flex flex-col gap-6"}>
                            <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    *Обсуждается индивидуально с Заказчиком
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TenScreen;
