import * as React from 'react';
import { cn } from '@/lib/func';
import { Portal } from '@/component/core';
import { Option } from './option';
import { useSelect } from '@/lib/hook';

interface Option {
    value: string;
    label: string;
}

interface Props {
    icon: React.ReactNode;
    title: string;
    options: Option[];
    className?: string;
    value?: string[];
    defaultValue?: string[];
    onChange?: (values: string[]) => void;
}

export const MultipleSelect = ({
    icon,
    title,
    options,
    className,
    value: valueProp,
    defaultValue,
    onChange,
}: Props) => {
    const [innerValue, setInnerValue] = React.useState<string[]>(defaultValue ?? []);
    const values = valueProp ?? innerValue;

    // ширина панели ×2 — как было в твоём мульти
    const { open, state, triggerRef, toggleMenu, panelProps } = useSelect({
        widthMultiplier: 2,
    });

    const selectedLabel = React.useMemo(() => {
        if (values.length === 0) return '—';
        return values
            .map((v) => options.find((o) => o.value === v)?.label ?? v)
            .join(', ');
    }, [values, options]);

    const commit = (next: string[]) => {
        if (valueProp === undefined) setInnerValue(next);
        onChange?.(next);
    };

    // всегда toggle, панель не закрываем
    const handleSelect = (val: string) => {
        const next = values.includes(val)
            ? values.filter((v) => v !== val)
            : [...values, val];
        commit(next);
    };

    return (
        <div className={cn('flex w-full flex-col gap-2', className)}>
            <div className="flex items-center gap-2 pl-2 text-dragon-magic">
                <span className="flex h-4 w-5 items-center justify-center">{icon}</span>
                <span className="text-[12px] font-bold uppercase tracking-wider">{title}</span>
            </div>

            <button
                ref={triggerRef}
                type="button"
                onClick={toggleMenu}
                className={cn(
                    'flex w-full items-center justify-between',
                    'rounded-xl border border-transparent bg-dark px-4 py-3',
                    'cursor-pointer transition-colors hover:bg-dragon-hover',
                    open && 'border-dragon-magic',
                )}
            >
                <span className="truncate text-sm font-medium text-dragon-text-primary">
                    {selectedLabel}
                </span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                        'shrink-0 text-dragon-text-secondary transition-transform duration-200',
                        open && 'rotate-180',
                    )}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {open && (
                <Portal>
                    <div
                        {...panelProps}
                        role="listbox"
                        aria-multiselectable
                        className={cn(
                            'z-50 rounded-xl bg-dark p-1.5',
                            'flex flex-row flex-wrap gap-1',
                            'shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25),0_2px_8px_-2px_rgba(139,30,30,0.15)]',
                            'transition-all duration-150 ease-out origin-top',
                            state === 'open'
                                ? 'scale-100 opacity-100 translate-y-0'
                                : 'scale-95 opacity-0 -translate-y-1',
                        )}
                    >
                        {options.map((opt) => (
                            <Option
                                key={opt.value}
                                label={opt.label}
                                isActive={values.includes(opt.value)}
                                onClick={() => handleSelect(opt.value)}
                            />
                        ))}
                    </div>
                </Portal>
            )}
        </div>
    );
};
