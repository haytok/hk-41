import { getDataAPI } from "./get-base-api-service";
import { Skills } from "../domain/skills-model";

export const getSkillsAPI = () => {
  const apiType = "skills";
  return getDataAPI<Skills>(apiType);
};
