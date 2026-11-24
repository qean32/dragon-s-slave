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
        'bg-dragon text-dragon-text-primary outline-dragon ' +
        'hover:shadow-[0_0_16px_rgba(139,30,30,0.5)]',
    secondary:
        'bg-dragon-elevated text-dragon-text-primary outline-2 outline-dragon/70 ' +
        'hover:shadow-[0_0_16px_rgba(139,30,30,0.35)]',
    ghost:
        'bg-transparent text-dragon-text-primary outline-transparent ' +
        'hover:shadow-[0_0_12px_rgba(139,30,30,0.25)]',
    danger:
        'bg-dragon-dark text-white outline-dragon-dark ' +
        'hover:shadow-[0_0_16px_rgba(94,21,21,0.55)]',
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
            'outline',
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
            <span className="w-3.5 h-3.5 outline-2 outline-current outline-t-transparent rounded-full animate-dragon-spin" />
        ) : (
            icon
        )}
        <span>{children}</span>
    </button>
);
