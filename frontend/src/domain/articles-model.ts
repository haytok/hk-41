export interface ArticleData {
  tagName: JSX.Element;
}

export interface ArticleContents {
  key: string;
  value: string;
  data: Array<ArticleData>;
}
