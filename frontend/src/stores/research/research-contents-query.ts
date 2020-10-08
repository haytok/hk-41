import { useResearchContentsSelector } from "./research-contents-read-store";

export function useResearchContentsGetter() {
  const researchContents = useResearchContentsSelector(
    (state) => state.researchContents.researchContents
  );

  return researchContents;
}
