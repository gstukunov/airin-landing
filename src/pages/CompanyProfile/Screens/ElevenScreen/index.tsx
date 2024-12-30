import letter from "../../../../assets/images/letter-replacer.png";

const ElevenScreen = () => {
    return (
        <div className={'w-full px-5 min-h-screen py-28 xl:py-0'}>
            <div
                className={"bg-[#4c39a0] relative z-10 text-6xl rounded-full min-w-28 max-w-28 w-full h-28 flex items-center justify-center"}>
                <span className={"relative right-0.5 bottom-1.5"}>4</span>
            </div>
            <div className={"flex items-center justify-between max-w-[1440px] mx-auto flex-col xl:flex-row gap-6 px-5 xl:gap-10"}>
                <div className={"text-left"}>
                    <h2 className={"md:text-[70px] text-4xl leading-none font-bold flex items-center mb-5"}>Л
                        <img src={letter} className={"md:w-16 md:h-16 w-10 h-10 relative md:top-2 top-1"} alt={""}/>КАЛИЗАЦИЯ
                    </h2>
                    <span className={"text-2xl text-[#5d5a7e]"}>
                        БИЗНЕС-ПРОЦЕССОВ И ОБХОД САНКЦИОННЫХ ОГРАНИЧЕНИЙ
                    </span>
                </div>
                <div className={"bg-[#171c2b] px-8 py-10 text-2xl md:min-w-[700px] w-full md:max-w-[700px] border-t-4 border-[#4c39a0]"}>
                    <h4 className={"border-b pb-5 border-gray-600 text-left w-fit"}>
                        ДЛЯ КАКИХ СЦЕНАРИЕВ ПОДОЙДЁТ:
                    </h4>
                    <ul className={"w-full text-left text-2xl list-disc pt-10 flex flex-col gap-6"}>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Основные бизнес-процессы опираются на облачные ресурсы зарубежных «партнеров».
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Доступ планируют ограничить/уже ограничили
                                </span>
                        </li>
                        <li style={{color: '#4c39a0'}}>
                                <span className={"text-white"}>
                                    Используемое ПО (толстый клиент)/железо, задействованное в бизнес-процессах, может быть ограничено в своём функционале (уже ограничено)
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ElevenScreen;
