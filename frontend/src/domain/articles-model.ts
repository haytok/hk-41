export interface ArticleData {
  url: string;
  content: string;
}

export interface ArticleContents {
  key: string;
  value: string;
  data: Array<ArticleData>;
}
