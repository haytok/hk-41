import axios, { AxiosResponse } from "axios";

import { BASE_REQUEST_PATH } from "../constants/request-path";
import { Experiences } from "../domain/experiences-domain";
import { Works } from "../domain/works-model";
import { Skills } from "../domain/skills-model";
import { Articles } from "../domain/articles-model";
import { ResearchContents } from "../domain/research-model";

type DataTypes = Experiences | Works | Skills | Articles | ResearchContents;

export const getDataAPI = <T extends DataTypes>(apiType: string) => {
  const path = `${BASE_REQUEST_PATH}${apiType}`;
  return axios.get(path).then(({ data }: AxiosResponse<T>) => {
    console.log(apiType, data);
    return Promise.resolve(data);
  });
};
