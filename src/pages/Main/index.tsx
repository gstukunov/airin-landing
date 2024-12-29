import { useState, useEffect } from "react";

import "./style.css";

import logo from "../../assets/images/airin_hero.png";
import bckg from "../../assets/images/space_bg.jpg";
import { Links } from "../../components/Links";

const links = [
  { name: "Airin Asset Control", path: "/airin-asset-control" },
  { name: "Airin phishing KIT", path: "/airin-phishing-kit" },
  { name: "Портфель услуг", path: "/company-profile", },
  // { name: "О нас", path: "/about-us" },
];

export const MainPage = () => {
  const [isAnimDelayed, setAnimDelayed] = useState<boolean>(false);

  useEffect(() => {
    setAnimDelayed(true);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setAnimDelayed(!isAnimDelayed);
    }, 8000);
  }, [isAnimDelayed]);

  return (
    <div className="mainPage-container">
      <div className="glitch">
        <img src={bckg} className="background-space" alt="" />
        {isAnimDelayed && (
          <div className="glitch__layers">
            <div className="glitch__layer"></div>
            <div className="glitch__layer"></div>
          </div>
        )}
      </div>
      <img src={logo} className="airin" alt="" />
      <Links links={links} />
    </div>
  );
};
