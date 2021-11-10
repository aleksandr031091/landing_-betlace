import sliderData from "../../slider.json";
import Slider from "react-slick";
import { nanoid } from "nanoid";
import MainSliderStyled from "./MainSliderStyled";
import sprite from "../../images/sprite.svg";
import bgImage from "../../images/slider-bg-image.png";

const MainSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="btnArrow" onClick={onClick}>
        <svg className="sliderIcon" width="5" height="10">
          <use href={sprite + "#icon-slider-r"}></use>
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="btnPrev" onClick={onClick}>
        <svg className="sliderIcon" width="5" height="10">
          <use href={sprite + "#icon-slider-l"}></use>
        </svg>
      </button>
    );
  }

  // function costimDots(dots) {

  //   return <ul>

  //     <li>
  //       <div>{dots}</div>
  //     </li>
  //   </ul>

  // }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div
        style={{
          marginRight: "6px",
          width: "18px",
          height: "7px",
          border: "1px #ffffff solid",
          borderRadius: "5px",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "28px -6px 39px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <MainSliderStyled>
      <div className="logoWrapper">
        <svg className="logoSlider">
          <use href={sprite + "#icon-Logo-second"} />
        </svg>
      </div>

      <div className="sliderWrapper">
        <img className="bgImage" src={bgImage} alt=",," />
        <Slider {...settings}>
          {sliderData.map((e) => (
            <div className="sliderContainer" key={nanoid()}>
              <h4 className="sliderFirstTitle">{e.mainTitle}</h4>
              <h5 className="sliderSecTittle">{e.title}</h5>
              <div className="decoration"></div>
              <p className="sliderDescription">{e.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </MainSliderStyled>
  );
};

export default MainSlider;
