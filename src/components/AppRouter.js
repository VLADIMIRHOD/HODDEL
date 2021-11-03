import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Context } from "..";
import { PrivateRoutes, PublicRoutes } from "../routes";
import { LOGIN_ROUTE, TASK_LIST_ROUTE } from "../utils/consts";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "./loader/loader";

export default function AppRouter() {
  const { auth } = useContext(Context);
  const [users, setUsers] = useState("loading");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      setUsers(true);
      // ..
    } else {
      setUsers(false);
      // User is signed out
      // ...
    }
  });
  if (users === "loading") {
    return <Loader />;
  }
  return users ? (
    <Switch>
      {PrivateRoutes.map(({ path, Component }) => (
        <Route
          path={path}
          key={path}
          component={Component}
          exact={true}
        ></Route>
      ))}
      <Redirect to={TASK_LIST_ROUTE}></Redirect>
    </Switch>
  ) : (
    <Switch>
      {PublicRoutes.map(({ path, Component }) => (
        <Route
          path={path}
          key={path}
          component={Component}
          exact={true}
        ></Route>
      ))}
      <Redirect to={LOGIN_ROUTE}></Redirect>
    </Switch>
  );
}
