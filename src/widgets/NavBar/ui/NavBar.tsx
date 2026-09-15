import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./NavBar.module.scss"
import { Modal } from "@/shared/Modal";
import { useState } from "react";
import { Button, ButtonTheme } from "@/shared/Button";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    const [authModalIsOpened, setAuthModalIsOpened] = useState(false);

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className="logo"></div>
            <div>
                {/* eslint-disable i18next/no-literal-string */}
                <Button theme={ButtonTheme.CLEAR} onClick={() => setAuthModalIsOpened(true)}>Войти</Button>
                <Modal isOpen={authModalIsOpened} onClose={() => setAuthModalIsOpened(false)}>
                    <p>Содержимое окна авторизации/регистрации</p>
                    <Button onClick={() => setAuthModalIsOpened(false)}>Закрыть</Button>
                </Modal>
            </div>
        </nav>
    )
}