import * as React from 'react';
import { cn } from '@/lib/func';
import { useHint, type Placement } from './context';

export interface HintContentProps {
    children: React.ReactNode;
    className?: string;
}

const positionStyles: Record<Placement, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-[var(--gutter)]',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-[var(--gutter)]',
    left: 'right-full top-1/2 -translate-y-1/2 mr-[var(--gutter)]',
    right: 'left-full top-1/2 -translate-y-1/2 ml-[var(--gutter)]',
};

const DURATION = 150;

export const HintContent = ({ children, className }: HintContentProps) => {
    const { open, placement, gutter } = useHint();
    const [mounted, setMounted] = React.useState(open);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (open) {
            setMounted(true);
            const id = requestAnimationFrame(() => {
                requestAnimationFrame(() => setVisible(true));
            });
            return () => cancelAnimationFrame(id);
        }

        setVisible(false);
        const timer = setTimeout(() => setMounted(false), DURATION);
        return () => clearTimeout(timer);
    }, [open]);

    if (!mounted) return null;

    return (
        <div
            role="tooltip"
            style={{ '--gutter': gutter } as React.CSSProperties}
            className={cn(
                'absolute z-50 text-sm font-light whitespace-nowrap rounded-md',
                'bg-dark px-3 py-1.5 text-sm text-dragon-text-primary shadow-lg',
                'transition-all duration-300 ease-out origin-bottom',
                visible
                    ? 'opacity-100'
                    : 'opacity-0',
                positionStyles[placement],
                className,
            )}
        >
            {children}
        </div>
    );
};
