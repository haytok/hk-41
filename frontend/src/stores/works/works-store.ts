import { Dispatch, Middleware, MiddlewareAPI } from "redux";

import { RootState } from "../root-store";
import { getWorksAction } from "../../application-actions";
import { $addWorksAction } from "./works-read-store";
import { Works } from "../../domain/works-model";
import { getWorksAPI } from "../../services/get-works-api-service";

export const worksStoreOnMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI<Dispatch<any>, RootState>) => (next) => async (
  action
): Promise<void> => {
  next(action);

  switch (action.type) {
    case getWorksAction.type: {
      try {
        const works: Works = await getWorksAPI();
        next($addWorksAction(works));
      } catch (error) {
        alert(error.message);
        console.log(`[${error.name}]: ${error.message}`);
      }

      return;
    }
  }
};
