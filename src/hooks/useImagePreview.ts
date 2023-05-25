import { FormEvent, useState } from "react";

export interface UseImagePreviewConfig {
  initialState: File;
}

const useImagePreview = () => {
  const [imagesPaths, setImagesPaths] = useState<string[]>([]);
  const [files, setFiles] = useState<File[] | null>(null);

  const selectFiles = (e: FormEvent<HTMLInputElement>) => {
    const fileList = e.currentTarget.files;
    let paths: string[] = [];
    let files: File[] = [];

    if (fileList) {
      for (let i = 0; i < fileList?.length; i++) {
        const file = fileList[i];
        if (file.size <= 8 * 1024 * 1024) {
          if (file.type === "image/jpeg" || file.type === "image/png") {
            let url = URL.createObjectURL(file);
            paths.push(url);
            files.push(file);
          }
        }
      }
    }

    setFiles(files);
    setImagesPaths(paths);
  };

  const cleanPaths = () => {
    setFiles(null);
    setImagesPaths([]);
  };

  return { imagesPaths, selectFiles, cleanPaths, files };
};

export default useImagePreview;
