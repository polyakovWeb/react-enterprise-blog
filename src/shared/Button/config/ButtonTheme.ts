export const ButtonTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    CLEAR: 'clear',
} as const;

export type ButtonThemeT = typeof ButtonTheme[keyof typeof ButtonTheme];