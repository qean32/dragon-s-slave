import * as React from 'react';
import { useHint } from './context';

export interface HintTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export const HintTrigger = ({ children, asChild }: HintTriggerProps) => {
    const { setOpen } = useHint();
    const Comp = asChild ? React.Fragment : 'button';

    return (
        <Comp
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {children}
        </Comp>
    );
};
