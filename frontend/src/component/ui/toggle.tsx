// ui-kit/Toggle.tsx
import React from 'react';

export interface ToggleProps {
    checked: boolean;
    onChange: (v: boolean) => void;
    label?: string;
    disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
    checked, onChange, label, disabled,
}) => (
    <label
        className={[
            'inline-flex items-center gap-2.5 select-none',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        ].join(' ')}
    >
        <input
            type="checkbox"
            className="hidden peer"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
        />
        <span
            className={[
                'relative w-11 h-6 rounded-full border transition-all duration-200',
                'bg-dragon-elevated border-dragon-border-strong',
                'peer-checked:bg-dragon-fire-grad peer-checked:border-dragon-fire-300',
                'peer-checked:shadow-[0_0_12px_rgba(255,107,26,0.4)]',
            ].join(' ')}
        >
            <span
                className={[
                    'absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full',
                    'bg-dragon-text-secondary transition-all duration-200',
                    'peer-checked:left-[22px] peer-checked:bg-dragon-fire-100',
                ].join(' ')}
            />
        </span>
        {label && <span className="text-sm text-dragon-text-primary">{label}</span>}
    </label>
);
