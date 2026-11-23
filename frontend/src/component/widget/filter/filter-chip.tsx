import * as React from 'react';
import { cn } from '@/lib/func';

interface Props {
    icon?: React.ReactNode;
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

export const FilterChip = ({ icon, children, active, onClick }: Props) => (
    <button
        type="button"
        onClick={onClick}
        className={cn(
            'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
            active
                ? 'border-dragon-magic bg-dragon-magic/10 text-dragon-magic'
                : 'border-dragon-border bg-dragon-base text-dragon-text-secondary hover:border-dragon-text-muted',
        )}
    >
        {icon && <span className="h-4 w-4">{icon}</span>}
        {children}
    </button>
);
