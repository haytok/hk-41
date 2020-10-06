import axios, { AxiosResponse } from "axios";

import { SkillContents } from "../domain/skills-model";
import { BASE_REQUEST_PATH } from "../constants/request-path";

export const getSkillsAPI = () => {
  const path = `${BASE_REQUEST_PATH}/skills/`;
  return axios.get(path).then(({ data }: AxiosResponse<SkillContents>) => {
    console.log("getSkillsAPI", data);
    return Promise.resolve(data);
  });
};
