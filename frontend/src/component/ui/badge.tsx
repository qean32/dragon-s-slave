// ui-kit/Badge.tsx
import React from 'react';

export type BadgeTone = 'fire' | 'scale' | 'magic' | 'danger' | 'neutral';

export interface BadgeProps {
    children: React.ReactNode;
    tone?: BadgeTone;
    dot?: boolean;
}

const toneStyles: Record<BadgeTone, string> = {
    fire: 'text-dragon-fire-300 bg-dragon-fire-500/10 border-dragon-fire-500/30',
    scale: 'text-dragon-scale-300 bg-dragon-scale-500/10 border-dragon-scale-500/30',
    magic: 'text-dragon-magic-300 bg-dragon-magic-500/10 border-dragon-magic-500/30',
    danger: 'text-red-300 bg-red-500/10 border-red-500/30',
    neutral: 'text-dragon-text-secondary bg-dragon-elevated border-dragon-border',
};

export const Badge: React.FC<BadgeProps> = ({
    children,
    tone = 'neutral',
    dot = false,
}) => (
    <span
        className={[
            'inline-flex items-center gap-1.5 px-2.5 py-[3px]',
            'text-xs font-semibold tracking-wide rounded-full border',
            toneStyles[tone],
        ].join(' ')}
    >
        {dot && (
            <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
        )}
        {children}
    </span>
);
