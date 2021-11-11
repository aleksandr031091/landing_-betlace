import styled from "styled-components";
import bgImageMob from "../../images/footer-mob.png";
import bgImageDesc from "../../images/hero-desc.jpg";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 40px 0 20px 0;
  color: #fff;
  background-image: url(${bgImageMob});

  .logoBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  .logo {
    margin-bottom: 20px;
    width: 36px;
    height: 40px;
  }
  .title {
    width: 90px;
    height: 12px;
  }

  .adDressBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  .address {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    text-transform: capitalize;
    color: #ffffff;
  }
  .letterIcon {
    position: relative;
    top: 1px;
    margin-right: 10px;
    width: 15px;
    height: 14px;

    fill: #fff;
  }
  .locationIcon {
    position: relative;
    top: 2px;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    fill: #fff;
  }
  .mailAdres {
    font-size: 16px;
    line-height: 32px;
    text-transform: capitalize;
    color: #fff;
    text-decoration: none;
  }

  .socialBox {
    display: flex;
    margin-bottom: 50px;
  }
  .socialLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 29px;
  }
  .socialLink:not(:last-child) {
    margin-right: 25px;
  }
  .socialIcon {
    width: 29px;

    height: 29px;
  }

  .copy {
  }

  @media screen and (min-width: 1920px) {
  }
`;

export default FooterStyled;
