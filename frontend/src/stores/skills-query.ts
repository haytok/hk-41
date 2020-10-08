import { useSkillsSelector } from "./skills-read-store";

export function useSkillsGetter() {
  const skills = useSkillsSelector((state) => state.skills.skills);

  return skills;
}
