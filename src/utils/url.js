import { path } from "../route";

export const getUrlKey = (url = "") => {
  return Object.entries(path).find((path) => path[1] === url)[0];
};
