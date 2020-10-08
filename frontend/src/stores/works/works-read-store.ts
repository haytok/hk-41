import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { Works } from "../../domain/works-model";

interface $addWorksDataActionPayload {
  payload: {
    works: Works;
  };
}

export const $addWorksAction = createAction(
  "works/$added",
  (works: Works): $addWorksDataActionPayload => {
    return {
      payload: {
        works,
      },
    };
  }
);

interface WorksState {
  works: Works;
}

const initialState: WorksState = {
  works: {
    key: "",
    value: "",
    data: [],
  },
};

export const worksReducer = createReducer<WorksState>(initialState, (builder) =>
  builder.addCase($addWorksAction, (state, { payload }) => {
    return {
      ...state,
      works: payload.works,
    };
  })
);

export const rootWorksReducer = {
  works: worksReducer,
};

const typeInferencer = combineReducers(rootWorksReducer);

export const useWorksSelector: TypedUseSelectorHook<ReturnType<
  typeof typeInferencer
>> = useSelector;
