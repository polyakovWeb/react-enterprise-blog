import type { ReactNode } from "react";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "@/shared/config/i18n/i18nForTests.ts";
import { MemoryRouter } from "react-router";
import { type StateSchema, StoreProvider } from "@/app/providers/StoreProvider";

export interface ProvidersOptions {
    initialEntries?: string[];
    initialState?: StateSchema;
}

interface AllProvidersProps extends ProvidersOptions {
    children: ReactNode;
}

export const AllTheProviders = (props: AllProvidersProps) => {
    const {
        children,
        initialEntries,
        initialState
    } = props

    return (
        <StoreProvider initialState={initialState}>
            <ThemeProvider>
                <I18nextProvider i18n={i18nForTests}>
                    <MemoryRouter initialEntries={initialEntries}>
                        {children}
                    </MemoryRouter>
                </I18nextProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}