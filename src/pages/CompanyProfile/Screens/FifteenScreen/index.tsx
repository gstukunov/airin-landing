import img from "../../../../assets/images/contactPage.png"
import contact from "../../../../assets/icons/contact.svg"
import mail from "../../../../assets/icons/mail.svg"
import phone from "../../../../assets/icons/phone.svg"

const FifteenScreen = () => {
    return (
        <div className={'w-full px-5 py-5'}>
            <h2 className={"text-[70px] leading-light font-bold"}>
                AIRIN SECURITY
            </h2>
            <div className={"flex justify-center flex-col xl:flex-row items-center gap-8"}>
                <img className={"w-[500px]"} src={img} alt=""/>
                <div>
                    <h3 className={"text-[#4c39a0] text-6xl"}>Контакты</h3>
                    <div className={"text-[#8786b6] text-xl pt-10 flex flex-col gap-6"}>
                        <div className="flex items-center gap-5">
                            <img src={contact} alt=""/>
                            <div className={"flex flex-col text-left"}>
                                <span>
                                    София Маморцева
                                </span>
                                <span>Коммерческий директор</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <img src={mail} alt=""/>
                            <div className={"flex flex-col text-left"}>
                                <span>
                                    sm@airinsecurity.ru
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={phone} className={"relative right-1"} alt=""/>
                            <div className={"flex flex-col text-left"}>
                                <span>
                                    +7 916 638 8675
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifteenScreen;
