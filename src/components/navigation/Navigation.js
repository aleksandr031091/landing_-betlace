import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";
import colors from "../../styles/colors";

const Navigation = ({ routes }) => {
  return (
    <NavigationStyled colors={colors}>
      <ul className="navList">
        {routes.map((route) => (
          <li className="navListItem" key={route.path}>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              to={route.path}
              exact={route.exact}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
