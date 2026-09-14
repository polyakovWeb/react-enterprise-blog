import { Button } from "@/shared/Button";
import { counterActions } from "../model/slice/CounterSlice.ts";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue.ts";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";

export const Counter = () => {
    const dispatch = useAppDispatch();

    const counterValue = useAppSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            {/* eslint-disable i18next/no-literal-string */}
            <h1 data-testid="counter-value">{counterValue}</h1>
            <Button data-testid="increment-counter" onClick={increment}>increment</Button>
            <Button data-testid="decrement-counter" onClick={decrement}>decrement</Button>
        </div>
    )
}