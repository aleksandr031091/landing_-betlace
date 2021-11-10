// import Slider from "react-slick";

import SliderStyled from "./SliderStyled";
import sprite from "../../images/sprite.svg";

const Slider = () => {
  return (
    <SliderStyled>
      <div className="logoWrapper">
        <svg className="logoSlider">
          <use href={sprite + "#icon-Logo-second"} />
        </svg>
      </div>
    </SliderStyled>
  );
};

export default Slider;
