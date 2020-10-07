import axios, { AxiosResponse } from "axios";

import { BASE_REQUEST_PATH } from "../constants/request-path";
import { Experiences } from "../domain/experiences-domain";

export const getExperiencesAPI = () => {
  const path = `${BASE_REQUEST_PATH}experiences/`;
  return axios.get(path).then(({ data }: AxiosResponse<Experiences>) => {
    console.log("getExperiencesAPI", data);
    return Promise.resolve(data);
  });
};
