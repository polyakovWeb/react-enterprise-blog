import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./LanguageSwitcher.module.scss"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/Button";

interface LanguageSwitcherProps {
    className?: string
    short?: boolean;
}

export const LanguageSwitcher = ({className, short = false}: LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation('sidebar');

    async function toggleLanguage() {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
        await i18n.changeLanguage(newLang);
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
            className={classNames(cls.LanguageSwitcher, {}, [className])}>
            {!short && `${t(['Язык'])}: `}{t('Сокращение языка')}
        </Button>
    )
}