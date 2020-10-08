export interface Work {
  url: string;
  content: string;
  title: string;
  body: string;
}

export interface Works {
  key: string;
  value: string;
  data: Array<Work>;
}
