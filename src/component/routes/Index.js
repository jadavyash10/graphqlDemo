import { Route } from "react-router-dom";
import Home from "../pages/Home.Page";
import Company from "../company/Index";
import LaunchesPast from "../launches/Index";
import Detail from "../launches/Detail";
import Histories from "../launches/Histories";

export const RoutesArr = [
  {
    path: "/",
    element: <Home />,
    id: "home",
  },
  {
    path: "/company",
    element: <Company />,
    id: "company",
  },
  {
    path: "/launchPast",
    element: <LaunchesPast />,
    id: "launchPast",
  },
  {
    path: "/detail/:id",
    element: <Detail />,
    id: "detail",
  },
  {
    path: "/histories",
    element: <Histories />,
    id: "histories",
  },
];

const routing = (arr) => {
  return (
    <>
      {arr?.map(({ path, element, id, childRoute }, i) => {
        if (childRoute) {
          return (
            <>
              <Route key={id} path={path} element={element} />;
              {routing(childRoute)}
            </>
          );
        } else {
          return <Route key={id} path={path} element={element} />;
        }
      })}
    </>
  );
};

export default routing;
