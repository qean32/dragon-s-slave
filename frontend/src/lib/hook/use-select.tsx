import * as React from 'react';
import { useClickOutside } from '@/lib/hook';

interface Pos {
    top: number;
    left: number;
    width: number;
}

interface UseSelectOptions {
    widthMultiplier?: number;
    offset?: number;
    closeDuration?: number;
}

export const useSelect = ({
    widthMultiplier = 1,
    offset = 8,
    closeDuration = 150,
}: UseSelectOptions = {}) => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState<'closed' | 'open'>('closed');
    const [pos, setPos] = React.useState<Pos>({ top: 0, left: 0, width: 0 });

    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const panelRef = React.useRef<HTMLDivElement>(null);

    const closeMenu = React.useCallback(() => {
        setState('closed');
        setTimeout(() => setOpen(false), closeDuration);
    }, [closeDuration]);

    useClickOutside(panelRef, () => closeMenu(), open);

    const toggleMenu = React.useCallback(() => {
        if (open) return closeMenu();

        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;

        setPos({
            top: rect.bottom + offset,
            left: rect.left,
            width: rect.width * widthMultiplier,
        });

        setOpen(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setState('open'));
        });
    }, [open, closeMenu, offset, widthMultiplier]);

    const panelProps = {
        ref: panelRef,
        style: {
            position: 'fixed' as const,
            top: pos.top,
            left: pos.left,
            width: pos.width,
        },
        'data-state': state,
    };

    return {
        open,
        state,
        pos,
        triggerRef,
        panelRef,
        toggleMenu,
        closeMenu,
        panelProps,
    };
};
