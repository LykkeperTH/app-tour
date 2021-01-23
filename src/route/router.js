import HomePage from "../page/home";
import { path } from "./path";
const routes = [
  {
    path: path.home,
    exact: true,
    component: HomePage,
  },
];
const formatRoutes = routes.map((route) => {
  if (route.routes) {
    route.path = route.routes.map((r) => r.path);
  }
  return route;
});

export default formatRoutes;
