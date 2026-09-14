import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "@/entities/Counter/model/selectors/getCounter/getCounter.ts";

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value
)