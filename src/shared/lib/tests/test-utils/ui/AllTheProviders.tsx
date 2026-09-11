import type { ReactNode } from "react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "@/shared/config/i18n/i18nForTests.ts";
import { MemoryRouter } from "react-router";

interface AllProvidersProps {
    children: ReactNode
}

export const AllTheProviders = ({children}: AllProvidersProps) => {
    return (
        <ThemeProvider>
            <I18nextProvider i18n={i18nForTests}>
                <MemoryRouter initialEntries={['/']}>
                    {children}
                </MemoryRouter>
            </I18nextProvider>
        </ThemeProvider>
    )
}