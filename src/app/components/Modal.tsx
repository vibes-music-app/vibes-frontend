"use client";
import { createPortal } from "react-dom";

export default function Modal({
    children,
    isOpen,
    setIsOpen,
}: {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) {
    return isOpen ? (
        createPortal(
            <div
                className="fixed left-0 top-0 z-50 flex h-screen w-screen animate-expand-popup items-center justify-center bg-[rgba(0,0,0,50%)]"
                onClick={() => setIsOpen(false)}
            >
                {children}
            </div>,
            document.body
        )
    ) : (
        <></>
    );
}
