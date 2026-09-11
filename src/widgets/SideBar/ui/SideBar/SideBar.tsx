import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./SideBar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/Button";
import { ButtonRounded } from "@/shared/Button/config/ButtonRounded.ts";
import { AppLink, AppLinkTheme } from "@/shared/AppLink";
import Arrow from "@/shared/assets/vertical-line-with-right-arrow.svg?react"
import Home from "@/shared/assets/home.svg?react"
import About from "@/shared/assets/layout-fluid.svg?react"

interface SideBarProps {
    className?: string
}

export const LOCAL_STORAGE_SIDEBAR_KEY = 'isCollapsedSidebar';

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) === "true");
    const {t} = useTranslation('sidebar');

    function toggleCollapsed() {
        setCollapsed(prev => {
            const newState = !prev
            localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, newState.toString())
            return newState
        })
    }

    return (
        <div data-testid="sidebar" className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            {/* navigations */}
            <nav className={cls.navigations}>
                {/* при необходимости можно итерироваться отдельным компонентом по массиву ссылок (конфигу) */}
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={'/'}>
                    <Home width={20} height={20}/>
                    <span className={cls.linkText}>{t('Главная')}</span>
                </AppLink>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    <About width={20} height={20}/>
                    <span className={cls.linkText}>{t('О сайте')}</span>
                </AppLink>
            </nav>

            {/* footer */}
            <div className={cls.footer}>
                <div className={cls.switchers}>
                    <ThemeSwitcher/>
                    <LanguageSwitcher short={collapsed}/>
                </div>
                <Button className={cls.toggleButton} theme={ButtonTheme.PRIMARY} rounded={ButtonRounded.S}
                        data-testid="toggle-sidebar" onClick={toggleCollapsed}>
                    <Arrow className={cls.arrowSvg} height={25} width={20}/>
                    <span
                        className={cls.toggleButtonTitle}>{t(collapsed ? 'Открыть сайдбар' : 'Закрыть сайдбар')}</span>
                </Button>
            </div>
        </div>
    )
}