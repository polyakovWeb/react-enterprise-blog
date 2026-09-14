import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../config/store.ts";
import type { StateSchema } from "@/app/providers/StoreProvider";

// Use instead of plain `useDispatch` and `useSelector`
export const useAppSelector = useSelector.withTypes<StateSchema>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
