import { useCallback, useState } from "react";

const useToggle = (initialState: boolean) => {
  const [active, setActive] = useState<boolean>(initialState);

  const handleToggle = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  const executeOnToggle = useCallback(
    (callback: (active: boolean) => void) => {
      callback(active);
    },
    [active]
  );

  return { active, handleToggle, executeOnToggle };
};

export default useToggle;
