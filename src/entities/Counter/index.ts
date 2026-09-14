import { Counter } from "./ui/Counter.tsx";
import type { CounterSchema } from "./model/types/CounterSchema.ts";
import { counterReducer } from ".//model/slice/CounterSlice.ts";

export {
    Counter,
    type CounterSchema,
    counterReducer
}