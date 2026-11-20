import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-dragon text-white border-red-900 ' +
        'hover:shadow-[0_0_16px_rgba(220,38,38,0.5)]',
    secondary:
        'bg-dragon-elevated text-red-400 border-2 border-red-900/70 ' +
        'hover:shadow-[0_0_16px_rgba(220,38,38,0.35)]',
    ghost:
        'bg-transparent text-red-400 border-transparent ' +
        'hover:shadow-[0_0_12px_rgba(220,38,38,0.25)]',
    danger:
        'bg-red-900 text-white border-red-950 ' +
        'hover:shadow-[0_0_16px_rgba(220,38,38,0.55)]',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-2 py-1.5 text-[13px]',
    md: 'px-3 py-2.5 text-sm',
    lg: 'px-5 py-3.5 text-base',
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    icon,
    fullWidth = false,
    className = '',
    ...rest
}) => (
    <button
        className={[
            'relative inline-flex items-center justify-center gap-2',
            'font-semibold tracking-wide',
            'rounded-md',
            'border',
            'cursor-pointer select-none overflow-hidden',
            'transition-shadow duration-200 ease-out',
            'disabled:opacity-45 disabled:cursor-not-allowed',
            variantStyles[variant],
            sizeStyles[size],
            fullWidth ? 'w-full' : '',
            className,
        ].join(' ')}
        disabled={rest.disabled || loading}
        {...rest}
    >
        {loading ? (
            <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-dragon-spin" />
        ) : (
            icon
        )}
        <span>{children}</span>
    </button>
);
