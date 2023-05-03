import { useEffect, useState } from "react";

export interface UseImagePreviewConfig {
  initialState: File;
}

const useImagePreview = () => {
  const [file, setFile] = useState<File>();
  const [imagePath, setImagePath] = useState<string>();

  const selectFile = (file: File) => {
    setFile(file);
  };

  useEffect(() => {
    if (!file) return;
    const imagePath = URL.createObjectURL(file);
    setImagePath(imagePath);
  }, [file]);

  return { imagePath, selectFile };
};

export default useImagePreview;
