import * as React from 'react';
import { cn } from '@/lib/func';
import { Portal } from '@/component/core';
import { Option, type optionInterface } from './option';
import { useSelect } from '@/lib/hook';
import { useFormContext } from 'react-hook-form';

interface Props {
    icon: React.ReactNode;
    title: string;
    options: optionInterface[];
    className?: string;
    value?: string;
    name: string
    defaultValue?: string;
    onChange?: (value: string) => void;
}

export const Select = ({
    icon,
    title,
    options,
    className,
    name,
    value: valueProp,
    defaultValue,
    onChange,
}: Props) => {
    const { setValue } = useFormContext()
    const [innerValue, setInnerValue] = React.useState(
        defaultValue ?? options[0]?.value ?? '',
    );
    const value = valueProp ?? innerValue;

    React.useEffect(() => {
        setValue(name, value)
    }, [value])

    const { open, state, triggerRef, toggleMenu, closeMenu, panelProps } = useSelect();

    const selectedLabel = options.find((o) => o.value === value)?.label ?? value;

    const handleSelect = (val: string) => {
        if (valueProp === undefined) setInnerValue(val);
        onChange?.(val);
        closeMenu();
    };

    return (
        <div className={cn('flex w-full flex-col gap-2 ', className)}>
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
                    'rounded-xl border border-transparent bg-dark-primary px-3 py-2.5',
                    'cursor-pointer transition-colors hover:bg-dragon-magic/20',
                    value != options[0].value && 'outline-dragon outline',
                )}
            >
                <span className={cn("truncate text-sm font-medium", value != options[0].value && 'text-dragon')}>
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
                            'z-50 flex flex-col gap-1 rounded-xl bg-dark-primary p-1.5',
                            'shadow-[0_5px_6px_rgba(220,38,38,0.020)]',
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
