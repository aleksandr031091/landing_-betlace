import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px 40px 16px;

  .bGTitle {
    margin-bottom: 46px;
    font-weight: 700;
    font-size: 27px;
    line-height: 1.11;
    color: ${({ colors }) => colors.bgTitleFormColor};

    text-transform: uppercase;
  }
  .wrapperTitle {
    position: relative;
    width: 100%;
  }
  .formTitle {
    position: absolute;
    bottom: 40px;
    left: 50%;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.11;
    color: ${({ colors }) => colors.accent};

    text-transform: uppercase;
    transform: translate(-50%);
  }

  .descBox {
    display: flex;
    flex-direction: column;
  }

  .formLabel {
    position: relative;
    margin-bottom: 40px;
    border-bottom: 1px solid ${({ colors }) => colors.secondAccentColor};
  }
  .inputIcon {
    position: absolute;
    top: 6px;
    width: 13px;
    height: 13px;
  }
  .formInput {
    padding: 0 0 8px 29px;
    width: 310px;

    border: none;
  }
  .formInput::placeholder {
    font-family: Poppins;
    font-size: 14px;
    line-height: 1.35;
    color: ${({ colors }) => colors.placeholderFormColor};
    text-transform: capitalize;
  }
  .btnSubmit {
    width: 177px;
    height: 56px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.18;
    color: ${({ colors }) => colors.background};
    background: #5dade2;
    box-shadow: 0px 4px 10px rgba(55, 123, 169, 0.3);
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 1920px) {
    .bGTitle {
      margin-bottom: 88px;
      font-size: 93px;
      line-height: 0.96;
    }
    .wrapperTitle {
    }
    .formTitle {
      bottom: 86px;
      font-size: 40px;
      line-height: 0.87;
    }
    .inputIcon {
      top: 4px;
      width: 15px;
      height: 15px;
    }

    .descBox {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 1170px;
    }
    .formLabel {
      width: calc((100% / 2) - 15px);
    }
    .formLabel:not(:last-child) {
      margin-bottom: 50px;
    }
    .formLabel:last-child {
      margin-bottom: 65px;
      width: 100%;
    }
    .formInput {
      margin-bottom: 0px;
      width: 540px;
    }

    .formInput::placeholder {
      font-size: 16px;
      line-height: 1.18;
    }

    .btnSubmit {
      width: 210px;
      height: 67px;
      font-size: 18px;
      line-height: 1.05;
    }
  }
`;

export default FormStyled;
