import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { ResearchContents } from "../../domain/research-model";

interface $addresearchContentsDataActionPayload {
  payload: {
    researchContents: ResearchContents;
  };
}

export const $addResearchContentsAction = createAction(
  "researchContents/$added",
  (
    researchContents: ResearchContents
  ): $addresearchContentsDataActionPayload => {
    return {
      payload: {
        researchContents,
      },
    };
  }
);

interface researchContentsState {
  researchContents: ResearchContents;
}

const initialState: researchContentsState = {
  researchContents: {
    key: "",
    value: "",
    data: [],
  },
};

export const researchContentsReducer = createReducer<researchContentsState>(
  initialState,
  (builder) =>
    builder.addCase($addResearchContentsAction, (state, { payload }) => {
      return {
        ...state,
        researchContents: payload.researchContents,
      };
    })
);

export const rootResearchContentsReducer = {
  researchContents: researchContentsReducer,
};

const typeInferencer = combineReducers(rootResearchContentsReducer);

export const useResearchContentsSelector: TypedUseSelectorHook<ReturnType<
  typeof typeInferencer
>> = useSelector;
