import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/func';
import type { ModalComponent } from '@/model';

export enum stateModal {
    open = 'open',
    closed = 'closed',
}

interface Props {
    entry: { id: number; Component: ModalComponent<any>; props: Record<string, unknown> };
    isTop: boolean;
    onClose: () => void;
}

export const Root = ({ entry, isTop, onClose }: Props) => {
    const { Component, props } = entry;
    const contentRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<Element | null>(null);
    const [state, setState] = useState<stateModal>(stateModal.closed);

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            requestAnimationFrame(() => setState(stateModal.open));
        });
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    useEffect(() => {
        if (!isTop) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeWithAnimation();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isTop]);

    useEffect(() => {
        if (!isTop || !contentRef.current) return;
        const root = contentRef.current;

        const getFocusable = () =>
            Array.from(
                root.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => el.offsetParent !== null);

        const focusables = getFocusable();
        focusables[0]?.focus();

        const onTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;
            const list = getFocusable();
            if (!list.length) return;
            const first = list[0];
            const last = list[list.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onTab);
        return () => document.removeEventListener('keydown', onTab);
    }, [isTop]);

    const closeWithAnimation = () => {
        setState(stateModal.closed);
        setTimeout(() => {
            onClose();
            (triggerRef.current as HTMLElement)?.focus?.();
        }, 180);
    };

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            data-state={state}
            role="presentation"
        >
            <div
                className={cn(
                    'absolute inset-0 bg-black/80 transition-all duration-300 ease-out',
                    state === stateModal.open ? 'opacity-100' : 'opacity-0',
                    !isTop && 'pointer-events-none'
                )}
                onClick={() => isTop && closeWithAnimation()}
            />

            <div
                ref={contentRef}
                role="dialog"
                aria-modal="true"
                className={cn(
                    'relative z-10 w-full max-w-md rounded-lg bg-dark p-6 shadow-2xl',
                    'transition-all duration-300',
                    state === stateModal.open
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-3 scale-95',
                    !isTop && 'pointer-events-none opacity-50'
                )}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Component {...props} onClose={closeWithAnimation} />
            </div>
        </div>,
        document.body
    );
};
