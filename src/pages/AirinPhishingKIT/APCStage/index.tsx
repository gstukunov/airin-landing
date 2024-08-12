import "./styles.css";
import aacLogo from "../../../assets/png/AACLogo.png";
import Arrow from "../../../assets/icons/arrow.svg";

import { FC } from "react";

type APCStageProps = {
  heading: string;
  index: string;
  srcImg: string;
  points: Array<string>;
};

export const APCStage: FC<APCStageProps> = (props) => {
  return (
    <div className="apc-stage">
      <a href="/">
        <img src={aacLogo} className="apc-stages-logo" alt="" />
      </a>
      <div className="apc-stage-name">
        {props.heading} <div className="apc-stages-idx">{props.index}</div>
      </div>
      <div className="apc-stage-heropoints">
        <img src={props.srcImg} className="apc-stage-hero" />
        <div className="apc-stages-points">
          {props.points.map((item: string) => (
            <div className="apc-stages-point-container">
              <img className="apc-points-arrow" src={Arrow} />
              <div className="apc-stages-point">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
