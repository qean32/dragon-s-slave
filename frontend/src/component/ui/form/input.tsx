import React, { forwardRef, useId, useState } from 'react';
import { cn } from '@/lib/func';

interface Props extends React.ComponentProps<'input'> {
    error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            defaultValue,
            value,
            maxLength,
            className,
            error,
            ...rest
        },
        ref,
    ) => {
        const id = useId();

        const [uncontrolledLength, setUncontrolledLength] = useState(
            typeof defaultValue === 'string' ? defaultValue.length : 0,
        );

        const length = value !== undefined ? String(value).length : uncontrolledLength;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (value === undefined) setUncontrolledLength(e.target.value.length);
            rest.onChange?.(e);
        };

        return (
            <div className={cn('relative', className)}>
                <input
                    ref={ref}
                    id={id}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    aria-invalid={!!error}
                    className={cn(
                        'w-full rounded-md border-2 border-red-900/70 px-3 py-3 text-md',
                        'outline-none transition-colors',
                        maxLength ? 'outline-2 outline-dragon-border' : "outline-2 outline-smoke",
                        error
                            ? 'outline-2 outline-smoke'
                            : 'outline-2 outline-dragon-border focus:outline-red-700',
                    )}
                    {...rest}
                />

                {maxLength && (
                    <p
                        className={cn(
                            'pointer-events-none absolute right-1.5 font-bold bottom-6 z-10 tabular-nums',
                            'text-[11px] leading-none',
                            length > maxLength ? 'text-dragon' : '',
                        )}
                    >
                        {length}/{maxLength}
                    </p>
                )}

                <p
                    className={cn(
                        'absolute text-md left-1 -bottom-1 text-dragon',
                        !error && 'opacity-0',
                    )}
                >
                    {error || '\u00A0'}
                </p>

                <div className="h-5" aria-hidden="true" />
            </div>
        );
    },
);

TextInput.displayName = 'TextInput';
