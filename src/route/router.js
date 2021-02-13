import { TourPage, HomePage, CreateTourPage } from "../page";
import { path } from "./path";
const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: `${path.tour}/:tourId`,
    exact: true,
    component: TourPage,
  },
  {
    path: path.detialtour,
    exact: true,
    component: TourPage,
  },
  {
    path: path.createtour,
    exact: true,
    component: CreateTourPage,
  },
];
const formatRoutes = routes.map((route) => {
  if (route.routes) {
    route.path = route.routes.map((r) => r.path);
  }
  return route;
});

export default formatRoutes;
