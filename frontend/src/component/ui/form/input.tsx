import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/func';

interface Props extends React.ComponentProps<'input'> {
    error?: string;
    title?: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            defaultValue,
            value,
            className,
            error,
            title,
            ...rest
        },
        ref,
    ) => {
        const id = useId();

        return (
            <div className={cn('relative flex flex-col gap-1', className)}>
                {title && (
                    <label
                        htmlFor={id}
                        className="text-[14px] mb-0.5 font-semibold tracking-wide text-dragon-text-secondary"
                    >
                        {title}
                    </label>
                )}

                <input
                    ref={ref}
                    id={id}
                    type="text"
                    value={value}
                    placeholder={error ? error : ""}
                    aria-invalid={!!error}
                    className={cn(
                        'w-full rounded-sm outline-2 outline-red-900/70 px-3 py-2 text-sm',
                        'transition-colors',
                        error
                            ? 'outline-2 outline-smoke'
                            : 'outline-2 outline-dragon',
                    )}
                    {...rest}
                />
            </div>
        );
    },
);

TextInput.displayName = 'TextInput';
