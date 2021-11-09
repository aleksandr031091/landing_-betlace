import React from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import MainStyled from "./MainStyled";
import { headerRoutes } from "../../routes/headerRoutes";
import { MainLoader } from "../loader/Loader";

const Main = () => {
  return (
    <MainStyled>
      <Suspense fallback={<MainLoader />}>
        <Switch>
          {headerRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
