import { useState } from "react";

const useLoading = (initialState = false) => {
  const [loading, setLoading] = useState<boolean>(initialState);

  const setLoadingState = (value: boolean) => {
    setLoading(value);
  };

  return { loading, setLoadingState };
};

export default useLoading;
