import { getDataAPI } from "./get-base-api-service";
import { ResearchContents } from "../domain/research-model";

export const getResearchAPI = () => {
  const apiType = "research";
  return getDataAPI<ResearchContents>(apiType);
};
