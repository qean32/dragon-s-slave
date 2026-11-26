import { cn } from '@/lib/func';

export const Tag = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <span
        className={cn(
            'inline-flex items-center rounded-md bg-dark-sm px-3 py-1 text-xs font-medium text-smoke-dark bg-dragon',
            className,
        )}
    >
        {children}
    </span>
);
