import phone from "../../assets/images/phone.png";
import mail from "../../assets/images/mail.png";
import id from "../../assets/images/id.png";
import "./index.css";
import { FC } from "react";

type AirinContactsProps = {
  icon?: string;
};

const AirinContacts: FC<AirinContactsProps> = ({ icon }) => {
  return (
    <div className="contact-section">
      {icon ? (
        <img src={icon} />
      ) : (
        <div className="left">
          <h1>AIRIN</h1>
          <p>Asset Control</p>
        </div>
      )}

      <div className="right">
        <div>Контакты</div>
        <ul className="contact-info">
          <li className="contacts-with-icons">
            <img className="icon card-icon" src={id} />
            <span>София Маморцева</span>
          </li>
          <li className="contacts-with-icons">
            <img className="icon email-icon" src={mail} />
            <a href="mailto:sm@airinsecurity.ru">sm@airinsecurity.ru</a>
          </li>
          <li className="contacts-with-icons">
            <img className="icon phone-icon" src={phone} />
            <span>+7 916 638 8675</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AirinContacts;
