import { Dispatch, Middleware, MiddlewareAPI } from "redux";

import { RootState } from "../root-store";
import { getResearchContentsAction } from "../../application-actions";
import { getResearchAPI } from "../../services/get-research-contents-api-service";
import { ResearchContents } from "../../domain/research-model";
import { $addResearchContentsAction } from "./research-contents-read-store";

export const researchContentsStoreOnMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI<Dispatch<any>, RootState>) => (next) => async (
  action
): Promise<void> => {
  next(action);

  switch (action.type) {
    case getResearchContentsAction.type: {
      try {
        const researchContents: ResearchContents = await getResearchAPI();
        next($addResearchContentsAction(researchContents));
      } catch (error) {
        alert(error.message);
        console.log(`[${error.name}]: ${error.message}`);
      }

      return;
    }
  }
};
