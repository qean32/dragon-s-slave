// ui-kit/Modal.tsx
import React, { useEffect } from 'react';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-3xl' };

export const Modal: React.FC<ModalProps> = ({
    open, onClose, title, children, footer, size = 'md',
}) => {
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        if (open) document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-5 bg-black/75 backdrop-blur-[6px] animate-dragon-fade-in"
            onClick={onClose}
        >
            <div
                className={[
                    'relative w-full rounded-2xl overflow-hidden',
                    'bg-dragon-base border border-dragon-border-strong',
                    'shadow-[0_12px_32px_rgba(0,0,0,0.7),0_0_60px_rgba(255,107,26,0.15)]',
                    'animate-dragon-modal-in',
                    sizeStyles[size],
                ].join(' ')}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                {/* Огненная полоска сверху */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dragon-fire-500 to-dragon-magic-500" />

                {title && (
                    <div className="flex justify-between items-center px-6 py-5 border-b border-dragon-border">
                        <h2 className="m-0 font-display text-xl tracking-wide">{title}</h2>
                        <button
                            className="bg-transparent border-none text-dragon-text-muted text-lg cursor-pointer transition-colors hover:text-dragon-fire-500"
                            onClick={onClose}
                            aria-label="Закрыть"
                        >
                            ✕
                        </button>
                    </div>
                )}
                <div className="px-6 py-6 text-dragon-text-secondary">{children}</div>
                {footer && (
                    <div className="flex justify-end gap-2.5 px-6 py-4 border-t border-dragon-border bg-black/20">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};
