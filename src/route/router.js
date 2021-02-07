import { TourPage, RestaurantPage, HomePage, CreateTourPage } from "../page";
import { path } from "./path";
const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: `${path.tour}/:id`,
    exact: true,
    component: TourPage,
  },
  {
    path: path.restaurant,
    exact: true,
    component: RestaurantPage,
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
