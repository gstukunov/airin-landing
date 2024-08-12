import { FC, useState } from "react";
import "./style.css";

import aacLogo from "../../assets/png/AACLogo.png";

type FormProps = {
  page: string;
};

type FormData = {
  page: string;
  name: string;
  email: string;
  phoneNumber: string;
  company?: string;
  jobPosition?: string;
};

export const Form: FC<FormProps> = ({ page }) => {
  const [form, setForm] = useState<FormData>({
    page,
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isAgreed, setAgreed] = useState<boolean>(false);

  return (
    <div className="form-general">
      <a href="/">
        <img src={aacLogo} className="small-logo" alt="" />
      </a>
      <h1 className="form-head">СВЯЗАТЬСЯ С НАМИ</h1>
      <div className="form-container">
        <label className="input-label">
          Укажите ваше имя:
          <input
            value={form.name}
            onChange={(ev) => setForm({ ...form, name: ev.target.value })}
            className="form-input"
          />
        </label>
        <label className="input-label">
          Укажите ваш почтовый адрес:
          <input
            value={form.email}
            onChange={(ev) => setForm({ ...form, email: ev.target.value })}
            className="form-input"
          />
        </label>
        <label className="input-label">
          Укажите ваш номер телефона:
          <input
            type="tel"
            value={form.phoneNumber}
            onChange={(ev) =>
              setForm({ ...form, phoneNumber: ev.target.value })
            }
            className="form-input"
          />
        </label>
        <label className="input-label">
          Укажите вашу компанию:
          <input
            value={form.company}
            onChange={(ev) => setForm({ ...form, company: ev.target.value })}
            className="form-input"
          />
        </label>
        <label className="input-label">
          Укажите вашу должность:
          <input
            value={form.jobPosition}
            onChange={(ev) =>
              setForm({ ...form, jobPosition: ev.target.value })
            }
            className="form-input"
          />
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            onClick={() => setAgreed(!isAgreed)}
            checked={isAgreed}
            className="form-checkbox"
          />
          С Пользовательским соглашением и Политикой в отношении обработки
          персональных данных ознакомлен
        </label>
        <button
          disabled={!isAgreed || !form.email || !form.name || !form.phoneNumber}
          className={`button-send ${
            !isAgreed || !form.email || !form.name || !form.phoneNumber
              ? "disabled-button"
              : ""
          }`}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};
