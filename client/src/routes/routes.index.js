import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/sidebar",
      element: <Sidebar />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/test",
          element: <Test />,
        },
      ],
    },
  ]);
}

const Sidebar = Loadable(
  lazy(() => import("../components/sidebar/sidebar.component"))
);

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout/mainLayout.component"))
);

//pages
const SignIn = Loadable(
  lazy(() => import("../pages/sign-in/sign-in.componsnt"))
);

const Home = Loadable(
  lazy(() => import("../pages/Homepage/homepage.component"))
);

const Test = Loadable(lazy(() => import("../pages/test")));
const Login = Loadable(lazy(() => import("../pages/login/login.component")));
