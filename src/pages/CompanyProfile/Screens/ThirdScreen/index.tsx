import style from "./style.module.scss";

const ThirdScreen = () => {
    return (
        <div className={'w-full flex gap-14 flex-col xl:flex-row items-center justify-between px-10 min-h-screen'}>
            <div className={style.textBlock}>
                <h2 className={"md:text-5xl text-4xl w-full text-left leading-normal font-normal"}>
                    Основные<br/>
                    компетенции компании<br/>
                    <p className={"md:text-[75px] text-5xl font-normal"}>AIRINSECURITY</p>
                </h2>
            </div>
            <div className={"w-full flex flex-col gap-5"}>
                <div className={"flex items-center"}>
                    <div
                        className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                        <span className={"relative right-0.5 bottom-1.5"}>1</span>
                    </div>
                    <div className={"bg-[#1b2134] relative right-10 p-3 ps-16 flex items-center justify-start text-left text-xl w-full min-h-[90px]"}>
                        Тестирование на проникновение внешнего/внутреннего периметра
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <div
                        className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                        <span className={"relative right-0.5 bottom-1.5"}>2</span>
                    </div>
                    <div className={"bg-[#1b2134] relative right-10 p-3 ps-16 flex items-center justify-start text-left text-xl w-full min-h-[90px]"}>
                        Проверка готовности к реагированию на инциденты ИБ
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <div
                        className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                        <span className={"relative right-0.5 bottom-1.5"}>3</span>
                    </div>
                    <div className={"bg-[#1b2134] relative right-10 p-3 ps-16 flex items-center justify-start text-left text-xl w-full min-h-[90px]"}>
                        Внедрение и эксплуатация российских решений межсетевого экранирования в т.ч. в облачных средах
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <div
                        className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                        <span className={"relative right-0.5 bottom-1.5"}>4</span>
                    </div>
                    <div className={"bg-[#1b2134] relative right-10 p-3 ps-16 flex items-center justify-start text-left text-xl w-full min-h-[90px]"}>
                        Локализация бизнес-процессов и обход санкционных ограничений ИС Заказчика
                    </div>
                </div>
                <div className={"flex items-center"}>
                    <div
                        className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                        <span className={"relative right-0.5 bottom-1.5"}>5</span>
                    </div>
                    <div className={"bg-[#1b2134] relative right-10 p-3 ps-16 flex items-center justify-start text-left text-xl w-full min-h-[90px]"}>
                        Реверс-инжиниринг ПО
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThirdScreen;
