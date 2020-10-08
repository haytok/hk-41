import axios, { AxiosResponse } from "axios";

import { Experiences } from "../domain/experiences-domain";
import { Works } from "../domain/works-model";
import { Skills } from "../domain/skills-model";
import { BASE_REQUEST_PATH } from "../constants/request-path";

type DataTypes = Experiences | Works | Skills;

export const getDataAPI = <T extends DataTypes>(apiType: string) => {
  const path = `${BASE_REQUEST_PATH}${apiType}`;
  return axios.get(path).then(({ data }: AxiosResponse<T>) => {
    console.log(apiType, data);
    return Promise.resolve(data);
  });
};
