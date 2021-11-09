import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 16px;
  height: 60px;

  box-shadow: ${({ isOpenModal }) =>
    isOpenModal ? "0px 5px 20px rgba(177, 177, 177, 0.4)" : "none"};

  .burgerMenu {
    width: 24px;
    height: 24px;
  }

  .closeModalBtn {
    width: 20px;
    height: 20px;
  }
`;

export default HeaderStyled;
