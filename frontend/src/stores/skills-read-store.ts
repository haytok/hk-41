import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { SkillContents } from "../domain/skills-model";

interface $addTestDataActionPayload {
  payload: {
    skills: SkillContents;
  };
}

export const $addSkillsAction = createAction(
  "skills/$added",
  (skills: SkillContents): $addTestDataActionPayload => {
    return {
      payload: {
        skills,
      },
    };
  }
);

interface SkillsState {
  skillContents: SkillContents;
}

const initialState: SkillsState = {
  skillContents: {
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
        skillContents: payload.skills,
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
