// ui-kit/Avatar.tsx
import React from 'react';

export interface AvatarProps {
    src?: string;
    name: string;
    size?: 'sm' | 'md' | 'lg';
    status?: 'online' | 'offline' | 'busy';
}

const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-16 h-16 text-lg',
};

const statusStyles = {
    online: 'bg-emerald-500 shadow-[0_0_8px_#10b981]',
    offline: 'bg-dragon-text-muted',
    busy: 'bg-red-500 shadow-[0_0_8px_#ef4444]',
};

export const Avatar: React.FC<AvatarProps> = ({
    src, name, size = 'md', status,
}) => {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
        <div
            className={[
                'relative inline-flex rounded-full overflow-visible',
                'border-2 border-dragon-fire-500 shadow-[0_0_10px_rgba(255,107,26,0.4)]',
                'bg-gradient-to-br from-dragon-fire-700 to-dragon-magic-700',
                sizeStyles[size],
            ].join(' ')}
        >
            {src ? (
                <img src={src} alt={name} className="w-full h-full rounded-full object-cover" />
            ) : (
                <span className="w-full h-full flex items-center justify-center text-white font-bold rounded-full">
                    {initials}
                </span>
            )}
            {status && (
                <span
                    className={[
                        'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-dragon-base',
                        statusStyles[status],
                    ].join(' ')}
                />
            )}
        </div>
    );
};
