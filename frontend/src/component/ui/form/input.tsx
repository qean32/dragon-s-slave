import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/func';
import { useFormContext } from 'react-hook-form';

interface Props extends React.ComponentProps<'input'> {
    title?: string;
    name: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            className,
            title,
            name,
            ...rest
        },
        ref,
    ) => {
        const id = useId();
        const { register, formState: { errors } } = useFormContext()
        const textError = errors[name]?.message as string;


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
                    {...register(name)}
                    ref={ref}
                    id={id}
                    placeholder={textError ?? rest.placeholder ?? ''}
                    aria-invalid={!!textError}
                    className={cn(
                        'w-full rounded-sm outline-1 outline-smoke px-3 py-2 text-sm',
                        'transition-colors',
                        textError
                            ? 'outline-1 outline-smoke'
                            : 'outline-1 outline-dragon',
                    )}
                    {...rest}
                />
                {textError && <p className='text-[10px] text-dragon'>{textError}</p>}
            </div>
        );
    },
);

TextInput.displayName = 'TextInput';
