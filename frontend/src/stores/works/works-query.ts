import { useWorksSelector } from "./works-read-store";

export function useWorksGetter() {
  const works = useWorksSelector((state) => state.works.works);

  return works;
}
