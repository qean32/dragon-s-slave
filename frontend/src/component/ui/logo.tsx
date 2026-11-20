import React from 'react';
import { cn } from '@/lib/func';

type LogoVariant = 'default' | 'short' | 'horizontal';
type LogoSize = 'icon-sm' | 'icon-md' | 'icon-lg' | 'icon-2xl' | 'icon-3xl';

interface Props {
    className?: string;
    variant?: LogoVariant;
    size?: LogoSize;
    alt?: string;
}

const variantSrc: Record<LogoVariant, string> = {
    default: '/icon/logo.svg',
    short: '/icon/logo-short.svg',
    horizontal: '/icon/logo-horizontal.svg',
};

const sizeClasses: Record<LogoSize, string> = {
    'icon-sm': 'w-6 h-6',
    'icon-md': 'w-8 h-8',
    'icon-lg': 'w-12 h-12',
    'icon-2xl': 'w-16 h-16',
    'icon-3xl': 'w-36 h-36',
};

export const Logo: React.FC<Props> = ({
    className,
    size = 'icon-md',
    variant = 'default',
    alt = 'Logo',
}) => {
    const src = variantSrc[variant];

    if (!src) return null;

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={cn(
                'select-none object-contain',
                sizeClasses[size],
                className,
            )}
        />
    );
};
