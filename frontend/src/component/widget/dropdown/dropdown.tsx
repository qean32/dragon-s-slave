import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/func';
import { useClickOutside } from '@/lib/hook';

export interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    align?: 'start' | 'end';
}

export const Dropdown = ({ trigger, children, className, align = 'start' }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState<'closed' | 'open'>('closed');
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useClickOutside(panelRef, () => close(), open);

    const openMenu = useCallback(() => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({
            top: rect.bottom + 6,
            left: align === 'end' ? rect.right : rect.left,
        });
        setOpen(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setState('open'));
        });
    }, [align]);

    const close = useCallback(() => {
        setState('closed');
        setTimeout(() => setOpen(false), 150);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, close]);

    return (
        <>
            <div
                ref={triggerRef}
                onClick={() => (open ? close() : openMenu())}
                className="inline-flex cursor-pointer"
            >
                {trigger}
            </div>

            {open &&
                createPortal(
                    <div
                        ref={panelRef}
                        role="menu"
                        style={{
                            position: 'fixed',
                            top: pos.top,
                            left: pos.left,
                            transform: align === 'end' ? 'translateX(-100%)' : undefined,
                        }}
                        className={cn(
                            'z-50 min-w-45 rounded-lg bg-darkness p-1 shadow-2xl',
                            'transition-all duration-150 ease-out origin-top',
                            state === 'open'
                                ? 'opacity-100 scale-100 translate-y-0'
                                : 'opacity-0 scale-95 -translate-y-1',
                            className,
                        )}
                    >
                        {children}
                    </div>,
                    document.body,
                )}
        </>
    );
};
