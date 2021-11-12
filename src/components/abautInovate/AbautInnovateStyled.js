import styled from "styled-components";

const AbautInnovateStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 16px 57px 16px;

  .bGTitle {
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 27px;
    line-height: 1.1;

    text-transform: uppercase;

    color: ${({ colors }) => colors.secondTittleColor};
  }

  .innovatetitle {
    position: relative;
    top: -40px;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.1;
    text-transform: uppercase;

    color: ${({ colors }) => colors.accent};
  }

  .innovateDescTitle {
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.64;

    color: ${({ colors }) => colors.primaryTextColor};
  }
  .boxDescription {
    margin-bottom: 30px;
    padding: 0 13px 0 13px;
  }
  .Description {
    text-align: center;
    font-size: 14px;
    line-height: 1.64;

    color: ${({ colors }) => colors.primaryTextColor};
  }

  .innovateList {
    padding: 0 29px 0 29px;
  }

  .innovateListItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 14px 40px 15px;
    background: ${({ colors }) => colors.background};
    box-shadow: 0px 4px 20px rgba(192, 192, 192, 0.25);
    border-radius: 10px;
  }
  .innovateListItem:not(:last-child) {
    margin-bottom: 20px;
  }

  .innovateTotal {
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 50px;
    line-height: 0.9;

    text-transform: capitalize;

    color: ${({ colors }) => colors.secondAccentColor};
  }

  .innovateDescription {
    font-size: 12px;
    line-height: 1.66;

    text-align: center;
    color: ${({ colors }) => colors.primaryTextColor};
  }

  @media screen and (min-width: 1280px) {
    padding: 130px 21px 160px 21px;
    .bGTitle {
      font-size: 93px;
      line-height: 0.96;
    }

    .innovatetitle {
      top: -60px;

      font-size: 40px;
      line-height: 0.87;
    }

    .innovateDescTitle {
      font-size: 18px;
      line-height: 1.66;
    }

    .boxDescription {
      margin-bottom: 65px;
      padding: 0 360px 0 360px;
    }

    .Description {
      font-size: 18px;
      line-height: 1.66;
    }

    .innovateList {
      display: flex;
      margin-bottom: 65px;
    }

    .innovateListItem {
      padding: 30px 15px 30px 15px;
    }
    .innovateListItem:not(:last-child) {
      margin: 0 30px 0 0;
    }

    .innovateTotal {
      margin-bottom: 30px;
      font-size: 60px;
      line-height: 0.75;
    }

    .innovateDescription {
      width: 240px;
      font-size: 16px;
      line-height: 1.43;
    }

    .footerInnovateDescription {
      font-size: 18px;
      line-height: 1.77;

      color: ${({ colors }) => colors.primaryTextColor};
    }
  }
`;

export default AbautInnovateStyled;
