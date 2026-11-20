// ui-kit/Tabs.tsx
import React from 'react';

export interface TabItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
}

export interface TabsProps {
    items: TabItem[];
    active: string;
    onChange: (key: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ items, active, onChange }) => (
    <div className="flex gap-1 p-1 rounded-dragon bg-dragon-elevated border border-dragon-border w-fit">
        {items.map((item) => (
            <button
                key={item.key}
                className={[
                    'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md',
                    'transition-all duration-200 border-none cursor-pointer',
                    active === item.key
                        ? 'bg-gradient-to-br from-dragon-fire-500/20 to-dragon-magic-500/20 text-dragon-fire-300 shadow-[inset_0_0_0_1px_rgba(255,107,26,0.4)]'
                        : 'bg-transparent text-dragon-text-secondary hover:text-dragon-text-primary',
                ].join(' ')}
                onClick={() => onChange(item.key)}
            >
                {item.icon}
                <span>{item.label}</span>
            </button>
        ))}
    </div>
);
