import style from "./style.module.scss";

const SixScreen = () => {
    return (
        <div className={style.textBlock}>
            <h3 className={"md:text-4xl text-2xl text-[#5d5a7e]"}>ТЕСТИРОВАНИЕ НА ПРОНИКНОВЕНИЕ</h3>
            <h2 className={"md:text-6xl text-4xl"}>ОТЛИЧИТЕЛЬНЫЕ ОСОБЕННОСТИ</h2>
            <div className={"flex items-start pt-10 ps-10 md:text-3xl text-2xl text-left"}>
                <ul className={"md:w-[80%] w-full pe-5 md:pe-0 flex flex-col gap-6"}>
                    <li className={"flex items-center gap-10"}>
                        <div className={"min-w-8 w-8 min-h-8 h-8 bg-[#4c39a0] rounded-full"}></div>
                        Результат успешного тестирования – компрометация одного из основных бизнес процессов Заказчика
                    </li>
                    <li className={"flex items-center gap-10"}>
                        <div className={"min-w-8 w-8 min-h-8 h-8 bg-[#4c39a0] rounded-full"}></div>
                        Поиск/использование скомпрометированных учетных записей Заказчика в рамках тестирования
                    </li>
                    <li className={"flex items-center gap-10"}>
                        <div className={"min-w-8 w-8 min-h-8 h-8 bg-[#4c39a0] rounded-full"}></div>
                        Осуществляем комплексную проверку уровня безопасности организации в соответствии с международными стандартами CBEST, ICAST, AASE, FEER, MITRE ATT&CK®
                    </li>
                    <li className={"flex items-center gap-10"}>
                        <div className={"min-w-8 w-8 min-h-8 h-8 bg-[#4c39a0] rounded-full"}></div>
                        Отчёт содержит практические рекомендации подразделению SOC компании, в части внедрения механизмов детектирования, а также применения СЗИ соответствующих классов
                    </li>
                    <li className={"flex items-center gap-10"}>
                        <div className={"min-w-8 w-8 min-h-8 h-8 bg-[#4c39a0] rounded-full"}></div>
                        Доступен формат услуги «Тестирование на проникновение по подписке» с ежеквартальными аудитами и отчётами по устранению уязвимостей
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SixScreen;
