import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/func';
import { useClickOutside } from '@/lib/hook';

export interface Option {
    value: string;
    label: string;
}

interface Props {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export const FilterSelect = ({
    label,
    options,
    value,
    onChange,
    placeholder = 'Выберите...',
    className,
}: Props) => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState<'closed' | 'open'>('closed');
    const [pos, setPos] = React.useState({ top: 0, left: 0, width: 0 });
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const panelRef = React.useRef<HTMLDivElement>(null);

    const selected = options.find((o) => o.value === value);

    useClickOutside(panelRef, () => closeMenu(), open);

    const closeMenu = React.useCallback(() => {
        setState('closed');
        setTimeout(() => setOpen(false), 150);
    }, []);

    const toggleMenu = () => {
        if (open) return closeMenu();

        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;

        setPos({
            top: rect.bottom + 8,
            left: rect.left,
            width: rect.width,
        });
        setOpen(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setState('open'));
        });
    };

    const handleSelect = (val: string) => {
        onChange(val);
        closeMenu();
    };

    React.useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, closeMenu]);

    return (
        <div className={cn('flex flex-col gap-1.5', className)}>
            {label && (
                <span className="text-xs font-semibold uppercase tracking-wide text-dragon-text-muted">
                    {label}
                </span>
            )}

            <button
                ref={triggerRef}
                type="button"
                onClick={toggleMenu}
                className={cn(
                    'flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm transition-colors',
                    'bg-dragon-base text-left',
                    open || selected
                        ? 'border-dragon-magic text-dragon-text-primary'
                        : 'border-transparent text-dragon-text-secondary hover:border-dragon-border',
                )}
            >
                <span className="truncate">{selected ? selected.label : placeholder}</span>

                <span className="flex items-center gap-1">
                    {selected && (
                        <span
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                                e.stopPropagation();
                                onChange('');
                            }}
                            className="flex h-4 w-4 items-center justify-center rounded-full text-dragon-text-muted transition-colors hover:text-dragon-text-primary"
                        >
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </span>
                    )}
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={cn('transition-transform duration-200 text-dragon-text-muted', open && 'rotate-180')}
                    >
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </span>
            </button>

            {open &&
                createPortal(
                    <div
                        ref={panelRef}
                        role="listbox"
                        style={{
                            position: 'fixed',
                            top: pos.top,
                            left: pos.left,
                            width: pos.width,
                        }}
                        className={cn(
                            'z-50 flex flex-col gap-1 rounded-lg border border-dragon-border bg-[#1a1a24] p-1.5 shadow-2xl',
                            'transition-all duration-150 ease-out origin-top',
                            state === 'open'
                                ? 'scale-100 opacity-100 translate-y-0'
                                : 'scale-95 opacity-0 -translate-y-1',
                        )}
                    >
                        {options.map((opt) => {
                            const isActive = opt.value === value;
                            return (
                                <button
                                    key={opt.value}
                                    type="button"
                                    role="option"
                                    aria-selected={isActive}
                                    onClick={() => handleSelect(opt.value)}
                                    className={cn(
                                        'flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                                        isActive
                                            ? 'bg-dragon-magic/20 text-dragon-text-primary'
                                            : 'text-dragon-text-secondary hover:bg-dragon-elevated hover:text-dragon-text-primary',
                                    )}
                                >
                                    <span className="truncate">{opt.label}</span>
                                    {isActive && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </button>
                            );
                        })}
                    </div>,
                    document.body,
                )}
        </div>
    );
};
