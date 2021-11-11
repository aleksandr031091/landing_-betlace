import HeroStyled from "./HeroStyled";
import sprite from "../../images/sprite.svg";

const Hero = () => {
  return (
    <HeroStyled>
      <svg className="logo">
        <use href={sprite + "#icon-Logo"} />
      </svg>

      <svg className="title">
        <use href={sprite + "#icon-hero-title"} />
      </svg>
    </HeroStyled>
  );
};

export default Hero;
