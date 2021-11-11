import styled from "styled-components";

const SliderStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px 0 80px 0;
  background-color: ${({ colors }) => colors.secondTittleColor};

  .logoWrapper {
    position: relative;
    top: -45px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    background-color: ${({ colors }) => colors.background};
    border-radius: 50%;
  }
  .logoSlider {
    width: 24px;
    height: 27px;
  }
  .bgImage {
    position: relative;
    top: -10px;
    width: 59px;
    height: 59px;
  }

  .sliderWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${({ colors }) => colors.accent};
    overflow: hidden;
  }

  .slick-slider {
    width: 100%;
  }
  .slick-track {
    display: flex;
  }
  .slick-dots {
    padding: 0;
  }
  .slick-active {
    background-color: ${({ colors }) => colors.background};
    margin-right: 6px;
    border-radius: 5px;
  }
  .slick-slide {
    text-align: center;
    width: 100%;
    padding: 30px 21px 30px 21px;
    margin: 0 16px 0 16px;
    background-color: ${({ colors }) => colors.background};
    box-shadow: 0px 0px 20px ${({ colors }) => colors.liderShadowColor};
    border-radius: 10px;
  }

  .paging {
    margin-right: 6px;
    width: 18px;
    height: 7px;
    border: 1px ${({ colors }) => colors.background} solid;
    border-radius: 5px;
  }
  .wrapperDots {
    border-radius: 10px;
    padding: 10px;
  }
  .listDots {
    display: flex;
    padding: 38px 0 49px 0;
    margin-right: -6px;
    justify-content: center;
    align-items: center;
  }

  .btnArrow {
    position: absolute;
    bottom: 38px;
    right: 64px;
    border: none;
    background: transparent;
  }
  .btnPrev {
    position: absolute;
    bottom: 38px;
    left: 64px;
    border: none;
    background: transparent;
  }
  .sliderIcon {
    width: 24px;
    height: 24px;
  }

  .sliderFirstTitle {
    font-weight: 700;
    font-size: 16px;
    line-height: 2;
    color: ${({ colors }) => colors.secondAccentColor};

    text-transform: uppercase;
  }
  .sliderSecTittle {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ colors }) => colors.primaryTextColor};
  }

  .decoration {
    margin: 0 auto;
    margin-bottom: 15px;
    height: 2px;
    width: 195px;
    background-color: ${({ colors }) => colors.secondAccentColor};
  }
  .sliderDescription {
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.57;

    color: ${({ colors }) => colors.primaryTextColor};
  }

  @media screen and (min-width: 1920px) {
    .logoWrapper {
      top: -115px;
      width: 230px;
      height: 237px;
    }
    .logoSlider {
      width: 61px;
      height: 61px;
    }
    .bgImage {
      position: absolute;
      top: -20px;
      width: 149px;
      height: 149px;
    }

    .sliderWrapper {
      width: 1170px;
    }

    .slick-slide {
      margin: 0 130px 0 130px;
      padding: 40px 110px 40px 110px;
    }

    .slick-slider {
      padding-top: 130px;
    }

    .listDots {
      padding: 75px 0 46px 0;
      margin-right: -6px;
    }

    .sliderFirstTitle {
      font-size: 20px;
      line-height: 1.6;
    }

    .wrapperTittleDesc {
      padding: 0 150px 0 150px;
    }
    .sliderSecTittle {
      margin-bottom: 33px;
      font-size: 20px;
      line-height: 1.6;
    }
    .decoration {
      margin-bottom: 32px;
      width: 262px;
    }
    .sliderDescription {
      font-size: 18px;
      line-height: 1.77;
    }

    .btnArrow {
      bottom: 34px;
      right: 435px;
    }
    .btnPrev {
      bottom: 34px;
      left: 435px;
    }

    .sliderIcon {
      width: 30px;
      height: 30px;
    }

    .paging {
      margin-right: 8px;
      width: 26px;
      height: 9px;
    }
    .listDots {
      margin-right: -8px;
    }
  }
`;

export default SliderStyled;
