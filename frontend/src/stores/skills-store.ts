import { Dispatch, Middleware, MiddlewareAPI } from "redux";

import { RootState } from "./root-store";
import { getSkillsAction } from "../application-actions";
import { getSkillsAPI } from "../services/get-skills-api-service";
import { Skills } from "../domain/skills-model";
import { $addSkillsAction } from "./skills-read-store";

export const skillsStoreOnMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI<Dispatch<any>, RootState>) => (next) => async (
  action
): Promise<void> => {
  next(action);

  switch (action.type) {
    case getSkillsAction.type: {
      try {
        const skills: Skills = await getSkillsAPI();
        next($addSkillsAction(skills));
      } catch (error) {
        alert(error.message);
        console.log(`[${error.name}]: ${error.message}`);
      }

      return;
    }
  }
};
