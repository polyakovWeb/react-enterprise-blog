import { describe, expect, test } from 'vitest'
import { customRender, screen } from "@/shared/lib/tests/test-utils";
import { SideBar } from "@/widgets/SideBar";
import { fireEvent } from "@testing-library/dom";
import cls from "./SideBar.module.scss"
import { AppRoutes, RouterPath } from "@/shared/config/RouteConfig/RouteConfig.tsx";
import { AppRouter } from "@/app/providers/router";

describe('Testing SideBar component', () => {
    test('render SideBar', async () => {
        customRender(<SideBar/>);
        expect(screen.getByTestId("sidebar"))
            .toBeInTheDocument()
        screen.debug();
    })

    test('toggle sidebar', () => {
        customRender(<SideBar/>);
        expect(screen.getByTestId("sidebar"))
            .toBeInTheDocument()
        const toggleButton = screen.getByTestId("toggle-sidebar");
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar"))
            .toHaveClass(cls.collapsed)
    })

    test('correct links from sidebar to other page', async () => {
        customRender(
            <>
                <SideBar/>
                <AppRouter/>
            </>
        );

        screen.debug()

        const aboutLink = screen.getByTestId(`app-link-${AppRoutes.ABOUT}`);
        expect(aboutLink)
            .toHaveAttribute('href', RouterPath[AppRoutes.ABOUT])

        const mainLink = screen.getByTestId(`app-link-${AppRoutes.MAIN}`);
        expect(mainLink)
            .toHaveAttribute('href', RouterPath[AppRoutes.MAIN])
    })
})