export interface WorksData {
  tagName: JSX.Element;
  title: string;
  body: string;
}

export interface WorkContents {
  key: string;
  value: string;
  data: Array<WorksData>;
}
