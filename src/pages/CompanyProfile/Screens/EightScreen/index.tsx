const EightScreen = () => {
    return (
        <div className={'w-full min-h-screen py-28 xl:py-0'}>
            <div className={"flex items-center justify-center flex-col xl:flex-row gap-6 xl:gap-0"}>
                <h2 className={"text-6xl leading-light font-normal"}>
                    ВОЗМОЖНЫЕ СЦЕНАРИИ:
                </h2>
                <div className={"flex flex-wrap justify-center gap-4 max-w-[1000px]"}>
                    <div
                        className={"bg-[#4c39a0] w-[280px] h-[280px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-xl font-normal"}>
                            Личный/ корпоративный ноутбук работника заражен ВПО, предоставляющим удалённый доступ к АРМ
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[280px] h-[280px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-xl font-normal"}>
                            Скомпрометирована доменная учетная запись с правами удалённого доступа
                            (в том числе к мобильной почте)
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[280px] h-[280px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-xl font-normal"}>
                            Скомпрометирована инфраструктура подрядной организации
                            (Развитие атаки в рамках существующего тоннеля с подрядчиком)
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[280px] h-[280px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-xl font-normal"}>
                            Легитимный/ Скомпрометированный доступ к ИС Компании
                        </span>
                    </div>
                    <div
                        className={"bg-[#4c39a0] w-[280px] h-[280px] rounded-xl flex flex-col items-center justify-center px-4"}>
                        <span className={"text-xl font-normal"}>
                            Атака вируса-шифровальщика
                            (на зараженном ПК создаётся и шифруется произвольный файл)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EightScreen;
