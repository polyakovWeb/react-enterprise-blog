import { describe, expect, test } from 'vitest'
import { render, screen } from "@/shared/lib/tests/test-utils";
import { SideBar } from "@/widgets/SideBar";
import { fireEvent } from "@testing-library/dom";
import cls from "./SideBar.module.scss"

describe('Testing SideBar component', () => {
    test('render SideBar', () => {
        render(<SideBar/>);
        expect(screen.getByTestId("sidebar"))
            .toBeInTheDocument()
        screen.debug();
    })

    test('toggle sidebar', () => {
        render(<SideBar/>);
        expect(screen.getByTestId("sidebar"))
            .toBeInTheDocument()
        const toggleButton = screen.getByTestId("toggle-sidebar");
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar"))
            .toHaveClass(cls.collapsed)
    })
})