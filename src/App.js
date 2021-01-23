import "./App.less";
import { router } from "./route";
import { renderRoutes } from "react-router-config";

function App() {
  return <div>{renderRoutes(router)}</div>;
}

export default App;
