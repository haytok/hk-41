import { useCallback } from "react";
import { useDispatch } from "react-redux";

export function useActionDispatch<T extends (...args: any) => any>(
  actionCreator: T
) {
  const dispatch = useDispatch();

  return useCallback((...args: Parameters<T>) => {
    dispatch(actionCreator(...args));
    // eslint-disable-next-line
  }, []);
}
