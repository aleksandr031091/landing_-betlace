import HeroStyled from "./HeroStyled";
import sprite from "../../images/sprite.svg";
// import bgMobile from "../../images/hero-mob.png";
// import bgdesktop from "../../images/hero-desc.jpg";
// import useModal from "../../hooks/useModal";

const Hero = () => {
  //   const [stateModal] = useModal();

  return (
    <HeroStyled>
      <svg className="logo">
        <use href={sprite + "#icon-Logo"} />
      </svg>

      <svg className="title">
        <use href={sprite + "#icon-hero-l"} />
      </svg>
    </HeroStyled>
  );
};

export default Hero;
