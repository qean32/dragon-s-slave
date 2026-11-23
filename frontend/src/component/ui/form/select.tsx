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
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export const Select = ({
    icon,
    title,
    options,
    className,
    value: valueProp,
    defaultValue,
    onChange,
}: Props) => {
    const [innerValue, setInnerValue] = React.useState(
        defaultValue ?? options[0]?.value ?? '',
    );
    const value = valueProp ?? innerValue;

    const { open, state, triggerRef, toggleMenu, closeMenu, panelProps } = useSelect();

    const selectedLabel = options.find((o) => o.value === value)?.label ?? value;

    const handleSelect = (val: string) => {
        if (valueProp === undefined) setInnerValue(val);
        onChange?.(val);
        closeMenu();
    };

    return (
        <div className={cn('flex w-full flex-col gap-2', className)}>
            <div className="flex items-center gap-2 pl-2 text-dragon-magic">
                <span className="flex h-4 w-5 items-center justify-center">{icon}</span>
                <span className="text-[12px] font-bold">{title}</span>
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
                    {selectedLabel || '-'}
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
                        className={cn(
                            'z-50 flex flex-col gap-1 rounded-xl bg-dark p-1.5',
                            'shadow-[0_4px_6px_rgba(220,38,38,0.020)]',
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
                                isActive={opt.value === value}
                                onClick={() => handleSelect(opt.value)}
                            />
                        ))}
                    </div>
                </Portal>
            )}
        </div>
    );
};
