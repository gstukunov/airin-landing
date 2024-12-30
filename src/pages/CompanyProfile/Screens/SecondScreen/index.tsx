const SecondScreen = () => {
    return (
        <div className={'w-full pt-10 px-5 min-h-screen'}>
            <h2 className={"text-[90px] leading-light font-bold"}>НАША МИССИЯ –<br/>
                <p className={"text-5xl font-normal"}>обеспечение доступности ИБ в России</p>
            </h2>
            <div className={"pt-28 flex flex-wrap justify-center gap-8"}>
                <div
                    className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-start px-4"}>
                    <div className={"font-bold text-[160px] relative bottom-24"}>1</div>
                    <span className={"text-2xl relative bottom-24 font-normal"}>
                            Создаем <br/>
                            принципиально новые услуги на основе потребностей рынка ИБ
                        </span>
                </div>
                <div
                    className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-start px-4"}>
                    <div className={"font-bold text-[160px] relative bottom-24"}>2</div>
                    <span className={"text-2xl relative bottom-24 font-normal"}>
                            Качественное <br/>
                            решение проблем клиента – главный приоритет
                        </span>
                </div>
                <div
                    className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-start px-4"}>
                    <div className={"font-bold text-[160px] relative bottom-24"}>3</div>
                    <span className={"text-2xl relative bottom-24 font-normal"}>
                            Наша команда – <br/>
                           эксперты с богатым опытом в сфере ИБ
                        </span>
                </div>
                <div
                    className={"bg-[#4c39a0] w-[315px] h-[315px] rounded-xl flex flex-col items-center justify-start px-4"}>
                    <div className={"font-bold text-[160px] relative bottom-24"}>4</div>
                    <span className={"text-2xl relative bottom-24 font-normal"}>
                            Стоимость услуг  <br/>
                            на основе точной оценки трудозатрат
                        </span>
                </div>
            </div>
        </div>
    )
}

export default SecondScreen;
