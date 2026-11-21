import React from 'react';
import { cn } from '@/lib/func';

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    danger?: boolean;
}

export const DropdownItem = ({ icon, danger, children, className, ...rest }: DropdownItemProps) => (
    <button
        type="button"
        role="menuitem"
        className={cn(
            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors',
            danger
                ? 'text-red-400 hover:bg-red-900/40 hover:text-red-300'
                : 'text-dragon-text-primary hover:bg-red-900/30 hover:text-red-300',
            className,
        )}
        {...rest}
    >
        {icon && <span className="flex h-4 w-4 items-center justify-center">{icon}</span>}
        {children}
    </button>
);
