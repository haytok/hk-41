export interface WorkData {
  url: string;
  content: string;
  title: string;
  body: string;
}

export interface WorkContents {
  key: string;
  value: string;
  data: Array<WorkData>;
}
