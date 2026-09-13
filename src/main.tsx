import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { BrowserRouter } from "react-router";

import './app/styles/index.scss';
import "./shared/config/i18n/i18n.ts"
import ErrorBoundary from "@/app/providers/ErrorBoundary";

createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            {/*boundary for all app, but best practice - boundary for every component*/}
            <ErrorBoundary>
                <BrowserRouter>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </StrictMode>,
    )
