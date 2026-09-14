import { describe, expect, test } from "vitest";
import { getCounter } from "@/entities/Counter/model/selectors/getCounter/getCounter.ts";
import type { StateSchema } from "@/app/providers/StoreProvider";

describe('getting counter from store', () => {
    test('get counter from store', () => {
        const state: StateSchema = {
            counter: {value: 25}
        };
        expect(getCounter(state))
            .toEqual({value: 25})
    })
})