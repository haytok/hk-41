import axios, { AxiosResponse } from "axios";

import { Experiences } from "../domain/experiences-domain";
import { Works } from "../domain/works-model";
import { Skills } from "../domain/skills-model";
import { Articles } from "../domain/articles-model";
import { ResearchContents } from "../domain/research-model";

// axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";

type DataTypes = Experiences | Works | Skills | Articles | ResearchContents;

export const getDataAPI = <T extends DataTypes>(apiType: string) => {
  const path = `api/${apiType}`;
  console.log("process.env.REACT_APP_MODE", process.env.REACT_APP_MODE);
  return axios.get(path).then(({ data }: AxiosResponse<T>) => {
    console.log(apiType, data);
    return Promise.resolve(data);
  });
};
