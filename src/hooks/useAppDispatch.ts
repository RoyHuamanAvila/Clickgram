import type { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
