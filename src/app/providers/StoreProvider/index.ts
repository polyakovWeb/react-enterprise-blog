import { StoreProvider } from "./ui/StoreProvider.tsx";
import { createReduxStore } from "./config/store.ts";
import type { StateSchema } from "./config/StoreSchema.ts";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider/lib/hooks.ts";

export {
    StoreProvider,
    createReduxStore,
    type StateSchema,
    useAppDispatch,
    useAppSelector
}