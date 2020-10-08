import { getDataAPI } from "./get-base-api-service";
import { Works } from "../domain/works-model";

export const getWorksAPI = () => {
  const apiType = "works";
  return getDataAPI<Works>(apiType);
};
