import * as React from 'react';
import { cn } from '@/lib/func';
import { HintContext, type Placement } from './context';

export interface HintProps {
    children: React.ReactNode;
    positioning?: { placement?: Placement; gutter?: string };
    className?: string;
}

export const Hint = ({ children, positioning, className }: HintProps) => {
    const [open, setOpen] = React.useState(false);
    const placement = positioning?.placement ?? 'top';
    const gutter = positioning?.gutter ?? '5px';

    const value = React.useMemo(
        () => ({ open, setOpen, placement, gutter }),
        [open, placement, gutter],
    );

    return (
        <HintContext.Provider value={value}>
            <div className={cn('relative inline-block', className)}>{children}</div>
        </HintContext.Provider>
    );
};
