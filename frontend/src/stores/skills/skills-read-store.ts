import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { Skills } from "../../domain/skills-model";

interface $addSkillsDataActionPayload {
  payload: {
    skills: Skills;
  };
}

export const $addSkillsAction = createAction(
  "skills/$added",
  (skills: Skills): $addSkillsDataActionPayload => {
    return {
      payload: {
        skills,
      },
    };
  }
);

interface SkillsState {
  skills: Skills;
}

const initialState: SkillsState = {
  skills: {
    key: "",
    value: "",
    data: [],
  },
};

export const skillsReducer = createReducer<SkillsState>(
  initialState,
  (builder) =>
    builder.addCase($addSkillsAction, (state, { payload }) => {
      return {
        ...state,
        skills: payload.skills,
      };
    })
);

export const rootSkillsReducer = {
  skills: skillsReducer,
};

const typeInferencer = combineReducers(rootSkillsReducer);

export const useSkillsSelector: TypedUseSelectorHook<ReturnType<
  typeof typeInferencer
>> = useSelector;
