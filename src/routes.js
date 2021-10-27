import Auth from "./components/auth/auth";
import Main from "./components/Main/Main";
import { LOGIN_ROUTE, TASK_LIST_ROUTE } from "./utils/consts";

export const PublicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  }
]

export const PrivateRoutes = [
  {
    path: TASK_LIST_ROUTE,
    Component: Main
  }
]