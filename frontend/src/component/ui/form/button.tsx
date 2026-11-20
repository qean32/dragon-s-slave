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
        'bg-red-800 text-white border-red-900 ' +
        'hover:bg-red-900',
    secondary:
        'bg-dragon-elevated text-red-400 border-2 border-red-900/70 ' +
        'hover:bg-red-950/40 hover:text-red-300',
    ghost:
        'bg-transparent text-red-400 border-transparent ' +
        'hover:bg-red-950/30 hover:text-red-300',
    danger:
        'bg-red-900 text-white border-red-950 ' +
        'hover:bg-red-950',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-1.5 text-[13px]',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
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
            'rounded-lg',
            'border',
            'cursor-pointer select-none overflow-hidden',
            'transition-colors duration-200 ease-out',
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
