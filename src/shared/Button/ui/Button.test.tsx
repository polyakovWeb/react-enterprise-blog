import { describe, expect, test } from 'vitest'
import { Button, ButtonTheme } from "@/shared/Button";
import cls from "./Button.module.scss"
import { customRender, screen } from "@/shared/lib/tests/test-utils";

describe('test button', () => {
    test('render button', () => {
        customRender(<Button>BUTTON TEST</Button>);
        expect(screen.getByText("BUTTON TEST"))
            .toBeInTheDocument();
        screen.debug();
    })

    test('render button with clear theme', () => {
        customRender(<Button theme={ButtonTheme.CLEAR}>CLEAR BUTTON TEST</Button>);
        const expectClearButton = expect(screen.getByText("CLEAR BUTTON TEST"))
        expectClearButton.toBeInTheDocument();
        expectClearButton.toHaveClass(cls.clear)
        screen.debug();
    })
})