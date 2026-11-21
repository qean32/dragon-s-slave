import * as React from 'react';

export type Placement = 'top' | 'bottom' | 'left' | 'right';

export interface HintContextValue {
    open: boolean;
    setOpen: (v: boolean) => void;
    placement: Placement;
    gutter: string;
}

export const HintContext = React.createContext<HintContextValue | null>(null);

export const useHint = () => {
    const ctx = React.useContext(HintContext);
    if (!ctx) throw new Error('Hint components must be used within <Hint>');
    return ctx;
};
