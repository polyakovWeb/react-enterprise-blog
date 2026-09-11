export const ButtonSize = {
    S: 'size-s',
    M: 'size-m',
    L: 'size-l',
    XL: 'size-xl',
} as const;

export type ButtonSizeT = typeof ButtonSize[keyof typeof ButtonSize];