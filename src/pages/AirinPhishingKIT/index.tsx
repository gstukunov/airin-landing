import "./styles.css";
import aacLogo from "../../assets/png/AACLogo.png";
import Hero from "../../assets/png/AACPhisingKIT.png";
import Research from "../../assets/png/APCcheckout.png";
import Finals from "../../assets/png/APCResearch.png";
import Setup from "../../assets/png/APCsetup.png";
import Attack from "../../assets/png/APCAttack.png";
import Contacts from "../../assets/png/contacts.png";
import { APCProblems } from "./APCProblems/Index";
import { Footer } from "../../components/Footer";
import { APCStage } from "./APCStage";
import AirinContacts from "../AirinAssetControlPage/AirinContacts";
import { Form } from "../../components/Form";

const stages = [
  {
    heading: "РАЗВЕДКА",
    srcImg: Research,
    points: [
      "Получение списка точек входа (корпоративные порталы, почта, VDI)",
      "Получение информации о «слитых» учетных записей Компании",
      `Изучение и обход потенциальных препятствий в проведении атаки: 
      \nналичие 2х-факторной аутентификации, \nсредств защиты`,
    ],
  },
  {
    heading: "ЭТАП ПОДГОТОВКИ АТАКИ",
    srcImg: Setup,
    points: [
      "Разработка сценария фишинговой атаки",
      "Настройка инфраструктуры, подходящей для сценария (домен, мимикрирующий под домен компании, либо под другого отправителя из сценария)",
      `Подготовка финального перечня адресатов`,
      "Генерация шаблона письма, поддельных веб-страниц, полезной нагрузки",
      "Подготовка инфраструктуры для обхода 2FA",
      "Подготовка сценария развития атаки и дальнейших действий после получения доступов",
    ],
  },
  {
    heading: "ПРОВЕДЕНИЕ АТАКИ",
    srcImg: Attack,
    points: ["Проведение атаки, получение доступов", "Развитие атаки"],
  },
  {
    heading: "ОТЧЕТ И\n СТАТИСТИКА",
    srcImg: Finals,
    points: [
      "Сбор статистики по проведенной симуляции атаки",
      "Написание отчета с подробным описанием атаки и рекомендациями по технической защите и обучению пользователей",
    ],
  },
];

export const AirinPhishingKIT = () => {
  return (
    <div className="phishingKit-container">
      <div className="hero-container">
        <a href="/">
          <img src={aacLogo} className="aacLogo-phising-kit" alt="" />
        </a>
        <div className="head-naming-phishing-kit">
          AIRIN
          <br />
          PHISHING
          <br />
          KIT
        </div>
        <img src={Hero} className="hero" />
      </div>
      <APCProblems />
      {stages.map((item, idx) => (
        <APCStage
          index={`0${idx + 1}`}
          points={item.points}
          heading={item.heading}
          srcImg={item.srcImg}
        />
      ))}
      <div className="apc-stages-summary">
        <div className="apc-stages-summary-heading">AIRIN PHISHING KIT</div>
        <div className="apc-stage-summary-container">
          {stages.map((item, idx) => (
            <div className="apc-stage-summary">
              <div className="apc-stages-summary-idx">{`0${idx + 1}`}</div>
              <img className="apc-stages-summary-logo" src={item.srcImg} />
              <div className="apc-stages-summary-text">{item.heading}</div>
            </div>
          ))}
        </div>
      </div>
      <Form page="AirinPhishingKit" />
      <AirinContacts icon={Contacts} />
      <Footer />
    </div>
  );
};
