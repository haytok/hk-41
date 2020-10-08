import { useExperiencesSelector } from "./experiences-read-store";

export function useExperiencesGetter() {
  const experiences = useExperiencesSelector(
    (state) => state.experiences.experiences
  );

  return experiences;
}
