import { getDataAPI } from "./get-base-api-service";
import { Experiences } from "../domain/experiences-domain";

export const getExperiencesAPI = () => {
  const apiType = "experiences";
  return getDataAPI<Experiences>(apiType);
};
