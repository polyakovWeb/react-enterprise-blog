import { describe, expect, test } from "vitest";
import { counterReducer, type CounterSchema } from "@/entities/Counter";
import { counterActions } from "@/entities/Counter/model/slice/CounterSlice.ts";

describe('counter slice', () => {
    test('increment counter', () => {
        const state: CounterSchema = {
            value: 5
        }
        expect(counterReducer(state, counterActions.increment()))
            .toEqual({value: 6})
    })
    test('decrement counter', () => {
        const state: CounterSchema = {
            value: 5
        }
        expect(counterReducer(state, counterActions.decrement()))
            .toEqual({value: 4})
    })
    test('increment/decrement counter with undefined state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({value: 1})
        expect(counterReducer(undefined, counterActions.decrement()))
            .toEqual({value: -1})
    })
})