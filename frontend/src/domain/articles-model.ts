export interface Article {
  url: string;
  content: string;
}

export interface Articles {
  key: string;
  value: string;
  data: Array<Article>;
}
