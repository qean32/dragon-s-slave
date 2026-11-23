import * as React from 'react';

interface Props {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

export const FilterSection = ({ icon, title, children }: Props) => (
    <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-dragon-magic">
            <span className="h-4 w-4">{icon}</span>
            <span className="text-xs font-bold uppercase tracking-wider">{title}</span>
        </div>
        {children}
    </div>
);
