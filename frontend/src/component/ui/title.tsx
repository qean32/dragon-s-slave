import React from 'react';
import { cn } from '@/lib/func';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    as?: HeadingLevel;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
}

const sizeStyles = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
};

export const Title = React.memo(
    ({ className, children, as: Tag = 'h2', size = 'lg', ...rest }: Props) => (
        <Tag className={cn('pl-0.5 font-semibold', sizeStyles[size], className)} {...rest}>
            {children}
        </Tag>
    ),
);

Title.displayName = 'Title';
