import * as React from 'react';
import { cn } from '@/lib/func';
import { Portal } from '@/component/core';
import { Option } from './option';
import { useSelect, useLocalFilter } from '@/lib/hook';
import { ControlledSearch } from './controlled-search';

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

    const [query, setQuery] = React.useState('');

    const { open, state, triggerRef, toggleMenu, panelProps } = useSelect({
        widthMultiplier: 2,
    });

    const selectedLabel = React.useMemo(() => {
        if (values.length === 0) return '';
        return values
            .map((v) => options.find((o) => o.value === v)?.label ?? v)
            .join(', ');
    }, [values, options]);

    const { filtered: filteredOptions, isEmpty } = useLocalFilter({
        options,
        query,
    });

    const commit = (next: string[]) => {
        if (valueProp === undefined) setInnerValue(next);
        onChange?.(next);
    };

    const handleSelect = (val: string) => {
        const next = values.includes(val)
            ? values.filter((v) => v !== val)
            : [...values, val];
        commit(next);
    };

    const handleReset = () => {
        commit([]);
    };

    React.useEffect(() => {
        if (!open) setQuery('');
    }, [open]);

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
                            'z-50 flex flex-col rounded-xl bg-dark p-1.5',
                            'shadow-[0_4px_6px_rgba(220,38,38,0.020)]',
                            'transition-all duration-150 ease-out origin-top',
                            state === 'open'
                                ? 'scale-100 opacity-100 translate-y-0'
                                : 'scale-95 opacity-0 -translate-y-1',
                        )}
                    >
                        <div className="py-1 pb-2">
                            <ControlledSearch setValue={setQuery} value={query} />
                        </div>

                        <div className="flex flex-row flex-wrap gap-2">
                            {!isEmpty ? (
                                filteredOptions.map((opt) => (
                                    <Option
                                        key={opt.value}
                                        multiple
                                        label={opt.label}
                                        isActive={values.includes(opt.value)}
                                        onClick={() => handleSelect(opt.value)}
                                    />
                                ))
                            ) : (
                                <span className="px-3 py-2 text-sm text-dragon-text-secondary">
                                    Ничего не найдено
                                </span>
                            )}
                        </div>

                        <div className="mt-2 w-fit py-1 pt-2">
                            <button
                                type="button"
                                onClick={handleReset}
                                className={cn(
                                    'w-full rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                )}
                            >
                                Сбросить
                            </button>
                        </div>
                    </div>
                </Portal>
            )}
        </div>
    );
};
