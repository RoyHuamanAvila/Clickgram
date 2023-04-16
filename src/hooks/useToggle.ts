import { useCallback, useState } from "react";

const useToggle = (initialState: boolean) => {
  const [active, setActive] = useState<boolean>(initialState);

  const handleToggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  return { active, handleToggle };
};

export default useToggle;
