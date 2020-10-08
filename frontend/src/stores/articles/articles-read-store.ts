import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { Articles } from "../../domain/articles-model";

interface $addArticlesDataActionPayload {
  payload: {
    articles: Articles;
  };
}

export const $addArticlesAction = createAction(
  "articles/$added",
  (articles: Articles): $addArticlesDataActionPayload => {
    return {
      payload: {
        articles,
      },
    };
  }
);

interface ArticlesState {
  articles: Articles;
}

const initialState: ArticlesState = {
  articles: {
    key: "",
    value: "",
    data: [],
  },
};

export const articlesReducer = createReducer<ArticlesState>(
  initialState,
  (builder) =>
    builder.addCase($addArticlesAction, (state, { payload }) => {
      return {
        ...state,
        articles: payload.articles,
      };
    })
);

export const rootArticlesReducer = {
  articles: articlesReducer,
};

const typeInferencer = combineReducers(rootArticlesReducer);

export const useArticlesSelector: TypedUseSelectorHook<ReturnType<
  typeof typeInferencer
>> = useSelector;
