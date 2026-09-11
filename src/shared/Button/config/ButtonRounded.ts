export const ButtonRounded = {
    NONE: 'rounded-none',
    S: 'rounded-s',
    M: 'rounded-m',
    L: 'rounded-l',
} as const;

export type ButtonRoundedT = typeof ButtonRounded[keyof typeof ButtonRounded];