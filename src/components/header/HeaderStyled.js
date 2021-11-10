import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 16px;
  height: 60px;
  box-shadow: 0px 5px 20px rgba(177, 177, 177, 0.4);

  z-index: 2;

  .burgerMenu {
    width: 24px;
    height: 24px;
  }

  .closeModalBtn {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1920px) {
    padding: 0 50px 0 50px;
    height: 105px;
  }
`;

export default HeaderStyled;
