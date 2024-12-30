const FourthScreen = () => {
    return (
        <div className={'w-full px-10 xl:px-5 min-h-screen py-28 xl:py-0'}>
            <div
                className={"bg-[#4c39a0] xl:ml-0 relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                <span className={"relative right-0.5 bottom-1.5"}>1</span>
            </div>
            <div className={"flex items-center justify-center flex-col lg:flex-row gap-6 lg:gap-0"}>
                <h2 className={"text-6xl leading-light font-normal"}>Портфель<br/>
                    PENTEST
                </h2>
                <div className={"flex flex-wrap justify-center gap-8 max-w-[1200px]"}>
                    <div
                        className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-2xl font-normal"}>
                            Внешнее тестирование на проникновение
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-2xl font-normal"}>
                            Внутреннее тестирование на проникновение
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-2xl font-normal"}>
                            Социотехническое тестирование
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-2xl font-normal"}>
                            Анализ защищенности веб-приложений
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[315px]  h-[315px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-2xl font-normal"}>
                            Анализ защищенности мобильных приложений
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-2xl font-normal"}>
                            Анализ защищенности систем ДБО
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthScreen;
