// components/ui/breadcrumbs.tsx
import * as React from 'react';
import { cn } from '@/lib/func';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface Props {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumbs = ({ items, className }: Props) => (
    <nav className={cn('flex items-center gap-2 text-xs font-medium', className)}>
        {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
                <React.Fragment key={item.label}>
                    {item.href && !isLast ? (
                        <a href={item.href} className="text-text-muted transition-colors hover:text-text-primary">
                            {item.label}
                        </a>
                    ) : (
                        <span className={isLast ? 'text-text-primary' : 'text-text-muted'}>
                            {item.label}
                        </span>
                    )}
                    {!isLast && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-border-hover">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    )}
                </React.Fragment>
            );
        })}
    </nav>
);
