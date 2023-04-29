import { useCallback, useState } from "react";

const useToggle = (initialState: boolean) => {
  const [active, setActive] = useState<boolean>(initialState);

  const handleToggle = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);

  const handleSetActive = (activate: boolean) => {
    setActive(activate);
  };

  const executeOnToggle = useCallback(
    (callback: (active: boolean) => void) => {
      callback(active);
    },
    [active]
  );

  return { active, handleToggle, handleSetActive, executeOnToggle };
};

export default useToggle;
