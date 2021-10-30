import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { PrivateRoutes, PublicRoutes } from "../routes";
import { LOGIN_ROUTE, TASK_LIST_ROUTE } from "../utils/consts";

export default function AppRouter() {
  const user = false;
  return user ? (
    <Switch>
      {PrivateRoutes.map(({path, Component}) => (
        <Route path={path} key={path} component={Component} exact={true}></Route>
      ))}
      <Redirect to={TASK_LIST_ROUTE}></Redirect>
    </Switch>
  ) : (
    <Switch>
      {PublicRoutes.map(({path, Component}) => (
        <Route path={path} key={path} component={Component} exact={true}></Route>
      ))
      }
      <Redirect to={LOGIN_ROUTE}></Redirect>
    </Switch>
  );
}
