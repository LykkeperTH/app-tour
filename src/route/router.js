import { TourPage, HomePage, CreateTourPage, UpdateTourPage } from "../page";
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
    path: path.detailTour,
    exact: true,
    component: TourPage,
  },
  {
    path: path.createTour,
    exact: true,
    component: CreateTourPage,
  },
  {
    path: `${path.updateTour}/:tourId`,
    exact: true,
    component: UpdateTourPage,
  },
];
const formatRoutes = routes.map((route) => {
  if (route.routes) {
    route.path = route.routes.map((r) => r.path);
  }
  return route;
});

export default formatRoutes;
