import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { rootSkillsReducer } from "./skills-read-store";
import { skillsStoreOnMiddleware } from "./skills-store";
// import { rootAuthReducer } from './auth-read-store';
// import { authStoreOnMiddleware } from './auth-store';
// import { rootBookmarkListReducer } from './bookmark-list-read-store';
// import { bookmarkListStoreOnMiddleWare } from './bookmark-list-store';
// import { bookmarkStoreOnMiddleware } from './bookmark-store';
// import { rootModalReducer } from './modal-ui-store';
// import { rootThreadListReducer } from './thread-list-read-store';
// import { threadListStoreOnMiddleware } from './thread-list-store';
// import { rootThreadReducer } from './thread-read-store';
// import { threadStoreOnMiddleware } from './thread-store';
// import { rootUserListReducer } from './user-list-read-store';
// import { userListStoreOnMiddleware } from './user-list-store';

const rootReducer = combineReducers({
  ...rootSkillsReducer,
});

const rootMiddleware = [skillsStoreOnMiddleware];

export type RootState = ReturnType<typeof rootReducer>;

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
});
