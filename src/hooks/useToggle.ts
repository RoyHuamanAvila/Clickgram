import { useState } from "react";

const useToggle = (initialState: boolean) => {
  const [active, setActive] = useState<boolean>(initialState);

  const handleToggle = () => {
    setActive(!active);
  };

  return { active, handleToggle };
};

export default useToggle;
