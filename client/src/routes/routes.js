import { lazy } from "react";
const ViewEmail = lazy(() => import("../components/ViewEmail"));
const Main = lazy(() => import("./../pages/Main"));
const Email = lazy(() => import("./../components/Email"));

const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Email,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
  invalid: {
    path: "/*",
    element: Email,
  },
};

export { routes };
