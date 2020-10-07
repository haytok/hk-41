import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { rootExperiencesReducer } from "./experiences-read-store";
import { rootSkillsReducer } from "./skills-read-store";
import { experiencesStoreOnMiddleware } from "./experiences-store";
import { skillsStoreOnMiddleware } from "./skills-store";

const rootReducer = combineReducers({
  ...rootExperiencesReducer,
  ...rootSkillsReducer,
});

const rootMiddleware = [skillsStoreOnMiddleware, experiencesStoreOnMiddleware];

export type RootState = ReturnType<typeof rootReducer>;

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
});
