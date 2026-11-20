// ui-kit/Card.tsx
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glow?: 'fire' | 'magic' | 'scale' | 'none';
    interactive?: boolean;
}

const glowStyles = {
    fire: 'border-dragon-fire-500/40 shadow-dragon-fire',
    magic: 'border-dragon-magic-500/40 shadow-dragon-magic',
    scale: 'border-dragon-scale-500/40 shadow-dragon-scale',
    none: '',
};

export const Card: React.FC<CardProps> = ({
    children,
    glow = 'none',
    interactive = false,
    className = '',
    ...rest
}) => (
    <div
        className={[
            'relative overflow-hidden rounded-2xl',
            'bg-gradient-to-br from-dragon-elevated to-dragon-base',
            'border border-dragon-border transition-all duration-200',
            // декоративная чешуя в углу
            "before:content-[''] before:absolute before:top-0 before:right-0",
            'before:w-[120px] before:h-[120px] before:pointer-events-none',
            'before:bg-[radial-gradient(circle_at_top_right,rgba(255,107,26,0.08),transparent_70%)]',
            glowStyles[glow],
            interactive
                ? 'cursor-pointer hover:-translate-y-0.5 hover:border-dragon-border-strong hover:shadow-dragon-lg'
                : '',
            className,
        ].join(' ')}
        {...rest}
    >
        {children}
    </div>
);

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="px-[22px] py-[18px] border-b border-dragon-border font-display text-lg font-semibold tracking-wide">
        {children}
    </div>
);

export const CardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="px-[22px] py-5">{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="px-[22px] py-3.5 border-t border-dragon-border bg-black/20">
        {children}
    </div>
);
