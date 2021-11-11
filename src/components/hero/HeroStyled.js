import styled from "styled-components";
import bgMobile from "../../images/hero-mob.png";
import bgdesktop from "../../images/hero-desc.jpg";

const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 222px 0 222px 0;
  width: 100%;

  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;

  .logo {
    width: 72px;
    height: 82px;
    margin-bottom: 30px;
  }

  .title {
    width: 343px;
    height: 45px;
  }

  @media screen and (min-width: 1280px) {
    padding: 440px 0 340px 0;
    background-image: url(${bgdesktop});

    .logo {
      width: 132px;
      height: 150px;
      margin-bottom: 67px;
    }

    .title {
      width: 626px;
      height: 81px;
    }
  }
`;

export default HeroStyled;
