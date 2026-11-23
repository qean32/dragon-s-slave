import * as React from 'react';
import { cn } from '@/lib/func';

interface Props {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export const Option = React.memo(({ label, isActive, onClick }: Props) => {
    return (
        <button
            type="button"
            role="option"
            aria-selected={isActive}
            onClick={onClick}
            className={cn(
                'flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-darkness',
                isActive
                    ? 'bg-dragon-magic/20 text-dragon-text-primary '
                    : 'text-dragon-text-secondary hover:bg-dragon-elevated hover:text-dragon-text-primary',
            )}
        >
            <span className="truncate">{label}</span>
            {isActive && (
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            )}
        </button>
    );
});

Option.displayName = 'Option';
