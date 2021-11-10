import styled from "styled-components";

const SliderStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px 0 80px 0;
  background-color: #fbfbfb;

  .logoWrapper {
    position: relative;
    top: -45px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    background-color: #fff;
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
    /* height: 7; */
    background-color: #5dade2;
    overflow: hidden;
  }

  .slick-slider {
    /* display: flex; */
    width: 100%;
  }
  .slick-track {
    display: flex;
  }
  .slick-dots {
    padding: 0;
  }
  .slick-active {
    background-color: #fff;
    margin-right: 6px;
    /* width: 18px; */
    border-radius: 5px;
  }
  .slick-slide {
    text-align: center;
    width: 100%;
    padding: 30px 21px 30px 21px;
    padding-bottom: 18px;
    margin: 0 16px 0 16px;

    background-color: #fff;

    box-shadow: 0px 0px 20px #438bbb;
    border-radius: 10px;
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
    color: #2874a6;

    text-transform: uppercase;
  }

  .sliderSecTittle {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #202020;
  }

  .decoration {
    margin: 0 auto;
    margin-bottom: 15px;
    height: 2px;
    width: 195px;
    background-color: #2874a6;
  }

  .sliderDescription {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;

    color: #202020;
  }
  @media screen and (min-width: 1920px) {
    .sliderWrapper {
      width: 1170px;
    }

    .slick-slide {
      text-align: center;
      width: 100%;
      padding: 30px 21px 30px 21px;
      padding-bottom: 0;
      margin: 0 130px 0 130px;

      background-color: #fff;

      box-shadow: 0px 0px 20px #438bbb;
      border-radius: 10px;
    }
  }
`;

export default SliderStyled;
