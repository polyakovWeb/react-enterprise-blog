import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { BrowserRouter } from "react-router";
import './app/styles/index.scss';
import "./shared/config/i18n/i18n.ts"
import ErrorBoundary from "@/app/providers/ErrorBoundary";
import { StoreProvider } from "@/app/providers/StoreProvider";

createRoot(document.getElementById('root')!)
    .render(
        <StrictMode>
            {/*boundary for all app, but best practice - boundary for every component*/}
            <ErrorBoundary>
                <StoreProvider>
                    <BrowserRouter>
                        <ThemeProvider>
                            <App/>
                        </ThemeProvider>
                    </BrowserRouter>
                </StoreProvider>
            </ErrorBoundary>
        </StrictMode>,
    )
