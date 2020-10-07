import { Dispatch, Middleware, MiddlewareAPI } from "redux";

import { RootState } from "./root-store";
import { Experiences } from "../domain/experiences-domain";
import { getExperiencesAPI } from "../services/get-experiences-api-service";
import { getExperiencesAction } from "../application-actions/experiences-actions";
import { $addExperiencesAction } from "./experiences-read-store";

export const experiencesStoreOnMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI<Dispatch<any>, RootState>) => (next) => async (
  action
): Promise<void> => {
  next(action);

  switch (action.type) {
    case getExperiencesAction.type: {
      try {
        const experiences: Experiences = await getExperiencesAPI();
        next($addExperiencesAction(experiences));
      } catch (error) {
        alert(error.message);
        console.log(`[${error.name}]: ${error.message}`);
      }

      return;
    }
  }
};
