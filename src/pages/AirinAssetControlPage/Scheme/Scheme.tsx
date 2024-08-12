import "./style.css";

import Nessus from "./img/nessus.png";
import Burpsuit from "./img/burpsuite.png";
import Nmap from "./img/nmap.png";
import Cobalt from "./img/cobalt.png";
import ArrowDown from "./img/arrow-down.svg";
import Scheme from "./img/scheme.jpg";
import Console from "./img/console.svg";
import Person from "./img/person.png";
import Document from "./img/documents.svg";
import ControlHub from "./img/Control_Hub.svg";
import Chat from "./img/chat.svg";
import aacLogo from "../../../assets/png/AACLogo.png";

export const SchemeFirst = () => {
  return (
    <div className="table-logos-card">
      <a href="/">
        <img src={aacLogo} className="small-logo-scheme" alt="" />
      </a>
      <div className="table-logos-services">
        <div className="logos-services-container">
          <img className="logos-services nessus" src={Nessus} />
        </div>
        <div className="logos-services-container">
          <img className="logos-services burpsuite" src={Burpsuit} />
        </div>
        <div className="logos-services-container">
          <img className="logos-services nmap" src={Nmap} />
        </div>
        <div className="logos-services-container">
          <img className="logos-services cobalt" src={Cobalt} />
        </div>
      </div>
      <div className="scheme">
        <div className="scheme-branch-f scheme-branch"></div>
        <div className="scheme-branch-s scheme-branch"></div>
        <div className="scheme-branch-t scheme-branch"></div>
      </div>
      <img className="arrow-down-ico" src={ArrowDown} />
      <div className="scheme-container">
        <div>
          <img className="scheme-img" src={Scheme} />
        </div>
      </div>
    </div>
  );
};

export const SchemeSecond = () => {
  return (
    <div className="scheme-benefits-container scheme-second">
      <a href="/">
        <img src={aacLogo} className="small-logo-scheme" alt="" />
      </a>
      <div className="scheme-container-img">
        <div>
          <img className="scheme-img" src={Scheme} />
        </div>
        <div className="dependencies-scheme">
          <img className="arrow-down-fragile" src={ArrowDown} />
          <img className="arrow-down-fragile" src={ArrowDown} />
        </div>
      </div>
      <div className="scheme-benefits">
        <div className="benefits-container">
          <div className="benefits-ico-frame">
            <img className="benefits-ico" src={Document} />
          </div>
          <p className="benefit-txt">Уязвимости</p>
          <img
            className="arrow-down-fragile absolute-arrow-common"
            src={ArrowDown}
          />
        </div>
        <div className="benefits-container">
          <div className="benefits-ico-frame">
            <img className="benefits-ico" src={Console} />
          </div>
          <p className="benefit-txt">Отчеты</p>
          <img
            className="arrow-down-fragile absolute-arrow-common"
            src={ArrowDown}
          />
        </div>
        <div className="benefits-container benefits-container-chat">
          <img
            className="arrow-down-fragile absolute-arrow-common-second"
            src={ArrowDown}
          />
          <div className="benefits-ico-frame">
            <img className="benefits-ico" src={Chat} />
          </div>
          <p className="benefit-txt">Чат</p>
          <img
            className="arrow-down-fragile absolute-arrow-common"
            src={ArrowDown}
          />
        </div>
      </div>
      <div className="responsible-benefits">
        <img src={ControlHub} className="control-logo" />
        <div className="control-line"></div>
        <div className="responsible-person">
          <img src={Person} className="person" />
          <h2 className="responsible-person-txt">Ответственный за систему</h2>
        </div>
      </div>
    </div>
  );
};
