import { describe, expect, test } from 'vitest'
import { customRender, screen } from "@/shared/lib/tests/test-utils";
import { Counter } from "@/entities/Counter";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { userEvent } from "storybook/test";

describe('Testing Counter component', () => {
    test('render Counter', () => {
        const state: StateSchema = {
            counter: {value: 15}
        }
        customRender(<Counter/>, {initialState: state});
        expect(screen.getByTestId('counter-value').textContent)
            .toBe("15");
        screen.debug();
    })
    test('increment counter', async () => {
        const state: StateSchema = {
            counter: {value: 15}
        }
        customRender(<Counter/>, {initialState: state});
        const incrementButton = screen.getByTestId('increment-counter')
        const user = userEvent.setup()
        await user.click(incrementButton);
        expect(screen.getByTestId('counter-value').textContent)
            .toBe("16");
        screen.debug();
    })
    test('decrement counter', async () => {
        const state: StateSchema = {
            counter: {value: 15}
        }
        customRender(<Counter/>, {initialState: state});
        const decrementButton = screen.getByTestId('decrement-counter')
        const user = userEvent.setup()
        await user.click(decrementButton);
        expect(screen.getByTestId('counter-value').textContent)
            .toBe("14");
        screen.debug();
    })
})