import "./style.css";

import aacHero from "../../assets/png/AAC.png";
import aacLogo from "../../assets/png/AACLogo.png";
import aacIdea from "../../assets/png/AAClamp.png";
import aacProblematics from "../../assets/png/AACProblematics.png";
import aacBlack from "../../assets/png/AACBlack.png";
import { SchemeFirst, SchemeSecond } from "./Scheme/Scheme";
import { Form } from "../../components/Form";
import AirinContacts from "./AirinContacts";
import { Footer } from "../../components/Footer";
import { GaugeChart } from "./Gauge/GaugeNew";

export const AirinAssetControlPage = () => {
  return (
    <div className="default-container">
      <div className="header-container">
        <a href="/">
          <img src={aacLogo} className="aacLogo" alt="" />
        </a>
        <img src={aacHero} className="aacHero" alt="" />
        <div className="header-text-main">
          <p className="header-small">Asset Control</p>
          <p className="header-big">AIRIN</p>
        </div>
        <div className="background-text">
          <p className="font-filled">
            AIRIN ASSET CONTROL AIRIN ASSET CONTROL AIRIN ASSET CONTROL
          </p>
          <p className="font-fold">
            AIRIN ASSET CONTROL AIRIN ASSET CONTROL AIRIN ASSET CONTROL
          </p>
          <p className="font-filled">
            AIRIN ASSET CONTROL AIRIN ASSET CONTROL AIRIN ASSET CONTROL
          </p>
          <p className="font-fold">
            AIRIN ASSET CONTROL AIRIN ASSET CONTROL AIRIN ASSET CONTROL
          </p>
        </div>
      </div>
      <div className="problematics">
        <img src={aacProblematics} alt="" className="problematics-airin" />
        <img src={aacBlack} alt="" className="problematics-black" />
        <a href="/">
          <img src={aacLogo} className="small-logo" alt="" />
        </a>
        <div className="problems">
          <p className="title">ПРОБЛЕМАТИКА:</p>
          <div className="description">
            Классический результат теста на проникновение — бумажный отчёт.
            Открытый вопрос: как эффективно управлять процессом устранения
            уязвимостей?
          </div>
          <div className="points">
            <div className="question-mark">?</div>
            <ul>
              <li>Заводит задачи вручную?</li>
              <li>Копировать из отчёта и отправлять ответственным?</li>
              <li>Как контролировать SLA?</li>
              <li>Как эффективно коммуницировать с ответственными?</li>
            </ul>
          </div>
        </div>
        <div className="solution">
          <p className="title">РЕШЕНИЕ:</p>
          <div className="description">
            Ведение процесса оценки защищенности в платформе{" "}
            <b>AIRIN Asset Control</b>— все найденные уязвимости — отдельный
            «кейс», который управляем в системе.
          </div>
          <div className="points points-solution">
            <img src={aacIdea} className="points-idea" alt="" />
            Коммуникация с ответственными и вся работа с «кейсом» ведется в
            одном окне
          </div>
        </div>
      </div>
      <div className="result">
        <a href="/">
          <img src={aacLogo} className="small-logo" alt="" />
        </a>
        <div className="result-title">
          <p className="upgrades-text">Какие процессы улучшаются</p>
          <p className="upgrades-head">РЕЗУЛЬТАТ</p>
        </div>
        <div className="upgrades-container">
          <div className="upgrades-main upgrades-scale">
            <div className="gauge-cont">
              <GaugeChart percentage={40} />
            </div>
            {/* <div className="percentage">
              <div className="perc-wrapper">
                40<div className="perc">%</div>
              </div>
            </div> */}
            <div className="perc-info">
              На 40% быстрее фаза заведения и устранения уязвимостей
            </div>
          </div>
          <div className="upgrades-main upgrades-info">
            <div className="upgrades-data">
              <h1 className="upgrades-quantity">
                2<div className="upgrades-in">в</div>
              </h1>
              <p className="upgrades-data-text">
                раза ускорение проведения проектов по тестированию на
                проникновение
              </p>
            </div>
            <div className="upgrades-points-container">
              <ul className="upgrades-points">
                <li>Автоматизированное создание отчета.</li>
                <li>Коммуникация с ответственными (AIRIN Asset Control).</li>
                <li>
                  Следование собственной методологии процесса управления
                  уязвимостями (AIRIN Asset Control).
                </li>
                <li>
                  Следование собственной методологии процесса управления
                  уязвимостями (AIRIN Asset Control).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SchemeFirst />
      <SchemeSecond />
      <Form page="AirinAssetControl" />
      <AirinContacts />
      <Footer />
    </div>
  );
};
