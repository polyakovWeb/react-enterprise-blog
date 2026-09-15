import { type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode;
    domElement?: Element;
    key?: number | string
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        domElement = document.body,
        key
    } = props;

    return createPortal(children, domElement, key)
}