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
    color: #ecf2f7;

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
    color: #5dade2;

    text-transform: uppercase;
    transform: translate(-50%);
  }

  .formLabel {
    position: relative;
  }
  .inputIcon {
    position: absolute;
    top: 6px;
    width: 13px;
    height: 13px;
  }
  .formInput {
    margin-bottom: 40px;
    padding: 0 0 8px 29px;
    width: 310px;

    border: none;
    border-bottom: 1px solid #2874a6;
  }

  .btnSubmit {
    width: 177px;
    height: 56px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.18;
    color: #ffffff;
    background: #5dade2;
    box-shadow: 0px 4px 10px rgba(55, 123, 169, 0.3);
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
  }
`;

export default FormStyled;
