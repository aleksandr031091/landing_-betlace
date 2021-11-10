import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navLink {
    text-decoration: none;

    font-weight: 500;
    font-size: 15px;
    line-height: 1.6;

    color: ${({ colors }) => colors.primaryTextColor};
  }

  .activeNavLink {
    color: ${({ colors }) => colors.accent};
  }

  .navListItem:not(:last-child) {
    margin-bottom: 54px;
  }

  @media screen and (min-width: 1920px) {
    .navList {
      display: flex;
      text-align: center;
    }

    .navLink {
      font-weight: bold;
      font-size: 16px;
      line-height: 1.5;
    }
    .navListItem:not(:last-child) {
      margin: 0 50px 0 0;
    }
  }
`;
export default NavigationStyled;
