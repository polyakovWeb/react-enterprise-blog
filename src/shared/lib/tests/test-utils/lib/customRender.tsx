import type { ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { AllTheProviders, type ProvidersOptions } from "../ui/AllTheProviders";


interface CustomRenderOptions extends ProvidersOptions, Omit<RenderOptions, "wrapper"> {
}


export const customRender = (
    ui: ReactElement,
    options: CustomRenderOptions = {},
) => {
    const {
        initialEntries = ['/'],
        initialState,
        ...renderOptions
    } = options;

    return render(ui, {
        wrapper: ({children}) => (
            <AllTheProviders
                initialEntries={initialEntries}
                initialState={initialState}
            >
                {children}
            </AllTheProviders>
        ),
        ...renderOptions,
    });
}