import { useState } from "react";

const useToggle = () => {
  const [active, setActive] = useState<boolean>();

  const handleToggle = () => {
    setActive(!active);
  };

  return { active, handleToggle };
};

export default useToggle;
