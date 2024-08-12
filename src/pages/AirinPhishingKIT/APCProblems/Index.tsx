import aacLogo from "../../../assets/png/AACLogo.png";
import Problems from "../../../assets/png/APCHero.png";
import "./styles.css";

export const APCProblems = () => {
  return (
    <div className="apc-problems">
      <a href="/">
        <img src={aacLogo} className="apc-problems-logo" alt="" />
      </a>
      <div className="apc-problems-problematics">
        <p className="apc-title">ПРОБЛЕМАТИКА:</p>
        <ul className="apc-problems-list">
          <li>
            Сложности в <br /> настройке/администрировании инфраструктуры для
            проведения фишинга
          </li>
          <li>Привыкание работников к простым и повторяющимся сценариям</li>
          <li>
            Отсутствие возможности перехвата 2FA (сессии) в сценариях фишинга
          </li>
          <li>
            Отчёты не хранятся централизованно, не позволяют развить атаку, с
            использованием полученных данных
          </li>
        </ul>
      </div>
      <img src={Problems} className="APC-problems-hero" />
      <div className="apc-problems-solution">
        <p className="apc-title">РЕШЕНИЕ:</p>
        <div className="apc-solution">
          Инфраструктура для проведения фишинга - под ключ
        </div>
        <div className="apc-solution-four">
          <div className="apc-solution-group-key">4</div>
          <div>
            разных сценария в год <div>(раз в квартал)</div>
          </div>
        </div>
        <div className="apc-solution-sfa">
          <div>
            <div>Функционал перехвата</div>
            <div>(сессии пользователя)</div>
          </div>
          <div className="apc-solution-group-key">2FA</div>
        </div>
        <div className="apc-solution-group-AAC">
          Отчёты хранятся централизованно, возможен импорт в решение{" "}
          <b>Asset Control от Airin Security</b>
        </div>
      </div>
    </div>
  );
};
