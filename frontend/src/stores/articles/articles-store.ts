import { Dispatch, Middleware, MiddlewareAPI } from "redux";

import { RootState } from "../root-store";
import { getArticlesAction } from "../../application-actions";
import { Articles } from "../../domain/articles-model";
import { getArticlesAPI } from "../../services/get-articles-api-service";
import { $addArticlesAction } from "./articles-read-store";

export const articlesStoreOnMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI<Dispatch<any>, RootState>) => (next) => async (
  action
): Promise<void> => {
  next(action);

  switch (action.type) {
    case getArticlesAction.type: {
      try {
        const articles: Articles = await getArticlesAPI();
        next($addArticlesAction(articles));
      } catch (error) {
        alert(error.message);
        console.log(`[${error.name}]: ${error.message}`);
      }

      return;
    }
  }
};
