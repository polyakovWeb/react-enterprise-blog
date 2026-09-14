import { describe, expect, test } from "vitest";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getCounterValue } from "@/entities/Counter/model/selectors/getCounterValue/getCounterValue.ts";

describe('get counter value selector', () => {
    test('get counter value from state', () => {
        const state: StateSchema = {
            counter: {value: 25}
        };
        expect(getCounterValue(state))
            .toBe(25)
    })
})