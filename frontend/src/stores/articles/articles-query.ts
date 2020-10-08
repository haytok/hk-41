import { useArticlesSelector } from "./articles-read-store";

export function useArticlesGetter() {
  const articles = useArticlesSelector((state) => state.articles.articles);

  return articles;
}
