import { TourPage, RestaurantPage, HomePage } from "../page";
import { path } from "./path";
const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: path.tour,
    exact: true,
    component: TourPage,
  },
  {
    path: path.restaurant,
    exact: true,
    component: RestaurantPage,
  },
];
const formatRoutes = routes.map((route) => {
  if (route.routes) {
    route.path = route.routes.map((r) => r.path);
  }
  return route;
});

export default formatRoutes;
