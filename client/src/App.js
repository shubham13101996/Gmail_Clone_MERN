import React, { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./routes/routes";
import SuspenseLoader from "./components/common/SuspenseLoader";


const ErrorComponent = lazy(() => import("./components/common/ErrorComponent"));



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path={routes.main.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />

      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route
          path={`${routes.emails.path}/:type`}
          errorElement={<ErrorComponent />}
          element={<routes.emails.element />}
        />
        <Route
          path={routes.view.path}
          errorElement={<ErrorComponent />}
          element={<routes.view.element />}
        />
      </Route>

      <Route
        path={routes.invalid.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />
    </Route>
  )
);
const App = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
