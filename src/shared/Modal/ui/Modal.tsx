import cls from "./Modal.module.scss"
import { type ReactNode, useCallback, useEffect } from "react";
import { Portal } from "@/shared/Portal";
import { classNames } from "@/shared/lib/classNames/classnames.ts";

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children?: ReactNode,
    className?: string
}

export const Modal = (props: ModalProps) => {
    const {children, className, isOpen, onClose} = props;

    const closeHandler = useCallback(() => {
        onClose?.()
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    // disable scroll body
    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        }
    }, [isOpen])

    // close on escape
    useEffect(() => {
        if (!isOpen) return;

        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div
                onClick={closeHandler}
                className={classNames(cls.Modal, {[cls.opened]: isOpen}, [className])}
            >
                <div
                    className={classNames(cls.container, {[cls.contentOpened]: isOpen})}
                    onClick={e => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
}