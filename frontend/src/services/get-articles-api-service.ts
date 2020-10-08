import { getDataAPI } from "./get-base-api-service";
import { Articles } from "../domain/articles-model";

export const getArticlesAPI = () => {
  const apiType = "articles";
  return getDataAPI<Articles>(apiType);
};
