import sprite from "../../../images/sprite.svg";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  return (
    <LogoStyled>
      <svg className="logoSvg">
        <use href={sprite + "#icon-Logo-second"} />
      </svg>
      <svg className="logoSvgLatter">
        <use href={sprite + "#icon-logo-letter"} />
      </svg>
      <svg className="logoSvgNum">
        <use href={sprite + "#icon-logo-num"} />
      </svg>
      <span className="name">innovate</span>
    </LogoStyled>
  );
};

export default Logo;
