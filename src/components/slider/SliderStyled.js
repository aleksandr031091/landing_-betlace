import styled from "styled-components";

const SliderStyled = styled.div`
  display: flex;
  justify-content: center;
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
`;

export default SliderStyled;
