import logo from "../../assets/images/airin_hero.png";

import "./style.css";

export const CompanyProfile = () => {
    return <div className="profile-container">
        <div className="profile-heading-section">
            <img src={logo} className="profile-airin" alt="" />
        </div>
    </div>;
}
