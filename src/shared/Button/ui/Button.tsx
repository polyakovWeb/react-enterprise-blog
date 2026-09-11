import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./Button.module.scss"
import { ButtonSize, type ButtonSizeT, ButtonTheme, type ButtonThemeT } from "@/shared/Button"
import type { FC, HTMLAttributes, ReactNode } from "react";
import { ButtonRounded, type ButtonRoundedT } from "@/shared/Button/config/ButtonRounded.ts";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ButtonThemeT,
    size?: ButtonSizeT,
    rounded?: ButtonRoundedT,
    disabled?: boolean,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        rounded = ButtonRounded.NONE,
        disabled = false,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls[rounded]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button type='button'
                className={classNames(cls.Button, mods, [className])}
                disabled={disabled}
                {...otherProps}>
            {children}
        </button>
    )
}