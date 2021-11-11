import styled from "styled-components";
import bgImageMob from "../../images/footer-mob.png";
import bgImageDesc from "../../images/footer-desc.jpg";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 40px 0 20px 0;
  color: ${({ colors }) => colors.background};
  background-image: url(${bgImageMob});
  background-repeat: no-repeat;
  background-size: cover;

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
    padding: 0 50px 0 50px;
  }
  .address {
    font-size: 16px;
    line-height: 2;
    text-align: center;
    text-transform: capitalize;
    color: ${({ colors }) => colors.background};
  }
  .letterIcon {
    position: relative;
    top: 1px;
    margin-right: 10px;
    width: 15px;
    height: 14px;

    fill: ${({ colors }) => colors.background};
  }
  .locationIcon {
    position: relative;
    top: 2px;
    margin-right: 5px;
    width: 16px;
    height: 16px;
    fill: ${({ colors }) => colors.background};
  }
  .mailAdres {
    font-size: 16px;
    line-height: 2;
    text-transform: capitalize;
    color: ${({ colors }) => colors.background};
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
    font-weight: 500;
    font-size: 14px;
    line-height: 1.64;

    text-transform: capitalize;
  }

  @media screen and (min-width: 1280px) {
    padding: 80px 0 29px 0;

    background-image: url(${bgImageDesc});

    .logoBox {
      margin-bottom: 80px;
    }
    .logo {
      margin-bottom: 13px;
      width: 43px;
      height: 48px;
    }
    .title {
      width: 97px;
      height: 13px;
    }

    .address {
      font-size: 21px;
      line-height: 1.9;
    }
    .mailAdres {
      font-size: 21px;
      line-height: 1.9;
    }

    .socialBox {
      margin-bottom: 80px;
    }

    .socialLink:not(:last-child) {
      margin-right: 20px;
    }
    .socialIcon {
      width: 23px;
      height: 23px;
    }

    .copy {
      font-size: 16px;
      line-height: 1.56;
    }
  }
`;

export default FooterStyled;
