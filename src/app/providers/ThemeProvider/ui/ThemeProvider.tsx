import { type FC, type ReactNode, useEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeT } from "@/entities/theme";

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: ThemeT;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children, initialTheme}) => {
    const getDefaultTheme = () =>
        initialTheme || (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeT) || Theme.LIGHT;

    const [theme, setTheme] = useState<ThemeT>(getDefaultTheme);
    const [prevInitialTheme, setPrevInitialTheme] = useState(initialTheme);

    if (initialTheme !== prevInitialTheme) {
        setPrevInitialTheme(initialTheme);
        if (initialTheme) {
            setTheme(initialTheme);
        }
    }

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    useEffect(() => {
        document.body.classList.remove(...Object.values(Theme));
        document.body.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};