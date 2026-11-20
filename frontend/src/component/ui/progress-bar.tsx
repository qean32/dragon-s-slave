// ui-kit/ProgressBar.tsx
import React from 'react';

export interface ProgressBarProps {
    value: number;
    tone?: 'fire' | 'scale' | 'magic';
    label?: string;
    showValue?: boolean;
}

const fillStyles = {
    fire: 'bg-gradient-to-r from-dragon-fire-700 to-dragon-fire-300 shadow-[0_0_12px_#ff6b1a]',
    scale: 'bg-gradient-to-r from-dragon-scale-700 to-dragon-scale-300 shadow-[0_0_12px_#10b981]',
    magic: 'bg-gradient-to-r from-dragon-magic-700 to-dragon-magic-300 shadow-[0_0_12px_#8b5cf6]',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
    value, tone = 'fire', label, showValue = true,
}) => {
    const clamped = Math.min(100, Math.max(0, value));
    return (
        <div className="w-full">
            {(label || showValue) && (
                <div className="flex justify-between mb-1.5 text-xs text-dragon-text-secondary">
                    {label && <span>{label}</span>}
                    {showValue && <span className="font-mono">{clamped}%</span>}
                </div>
            )}
            <div className="h-2 rounded-full overflow-hidden bg-dragon-elevated border border-dragon-border">
                <div
                    className={['h-full rounded-full transition-[width] duration-[400ms] ease-out', fillStyles[tone]].join(' ')}
                    style={{ width: `${clamped}%` }}
                />
            </div>
        </div>
    );
};
