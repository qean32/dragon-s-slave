import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/func';
import { useFormContext, useFormState } from 'react-hook-form';

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
    ) => {
        const id = useId();
        const { register, control } = useFormContext();
        const { errors } = useFormState({ control });

        const textError = errors[name]?.message as string | undefined;


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
                    {...rest}
                    {...register(name)}
                    id={id}
                    placeholder={rest.placeholder ?? ''}
                    aria-invalid={!!textError}
                    className={cn(
                        'w-full rounded-sm outline-1 outline-smoke px-3 py-2 text-sm',
                        'transition-colors',
                        textError
                            ? 'outline-1 outline-smoke'
                            : 'outline-1 outline-dragon',
                    )}
                />
                <div className="h-1">
                    <p className='text-[12px] text-dragon'>{textError ? textError : " "}</p>
                </div>
            </div>
        );
    },
);

TextInput.displayName = 'TextInput';
