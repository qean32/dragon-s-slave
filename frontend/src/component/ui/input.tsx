// ui-kit/Input.tsx
import React, { useId } from 'react';

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, hint, icon, className = '', id, ...rest }, ref) => {
        const autoId = useId();
        const inputId = id ?? autoId;

        return (
            <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-[13px] font-semibold tracking-wide text-dragon-text-secondary"
                    >
                        {label}
                    </label>
                )}
                <div
                    className={[
                        'flex items-center gap-2.5 px-3.5',
                        'bg-dragon-elevated border rounded-dragon transition-all duration-200',
                        error
                            ? 'border-red-500 focus-within:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
                            : 'border-dragon-border focus-within:border-dragon-fire-500 focus-within:shadow-[0_0_0_3px_rgba(255,107,26,0.15)]',
                    ].join(' ')}
                >
                    {icon && (
                        <span className="text-dragon-text-muted flex items-center">{icon}</span>
                    )}
                    <input
                        ref={ref}
                        id={inputId}
                        className="flex-1 bg-transparent border-none outline-none py-3 text-sm text-dragon-text-primary placeholder:text-dragon-text-muted font-body"
                        {...rest}
                    />
                </div>
                {error && <span className="text-xs text-red-500">{error}</span>}
                {!error && hint && (
                    <span className="text-xs text-dragon-text-muted">{hint}</span>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';
