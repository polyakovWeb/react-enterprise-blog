import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./NavBar.module.scss"

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className="logo"></div>
            <div>/</div>
        </nav>
    )
}