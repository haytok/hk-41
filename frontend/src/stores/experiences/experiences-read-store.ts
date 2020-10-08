import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { Experiences } from "../../domain/experiences-domain";

interface $addExperiencesActionPayload {
  payload: {
    experiences: Experiences;
  };
}

export const $addExperiencesAction = createAction(
  "experiences/$added",
  (experiences: Experiences): $addExperiencesActionPayload => {
    return {
      payload: {
        experiences,
      },
    };
  }
);

interface ExperiencesState {
  experiences: Experiences;
}

const initialState: ExperiencesState = {
  experiences: {
    key: "",
    value: "",
    data: [],
  },
};

export const experiencesReducer = createReducer<ExperiencesState>(
  initialState,
  (builder) =>
    builder.addCase($addExperiencesAction, (state, { payload }) => {
      return {
        ...state,
        experiences: payload.experiences,
      };
    })
);

export const rootExperiencesReducer = {
  experiences: experiencesReducer,
};

const typeInferencer = combineReducers(rootExperiencesReducer);

export const useExperiencesSelector: TypedUseSelectorHook<ReturnType<
  typeof typeInferencer
>> = useSelector;
