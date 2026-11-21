import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ModalContext } from '@/lib/hook';
import { Root } from '@/component/widget/modal';
import type { ModalComponent } from '@/model';

interface Entry {
    id: number;
    Component: ModalComponent<any>;
    props: Record<string, unknown>;
}

let nextId = 0;

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [stack, setStack] = useState<Entry[]>([]);

    const open = useCallback(<P,>(Component: ModalComponent<P>, props?: P) => {
        setStack((prev) => [...prev, { id: ++nextId, Component, props: (props ?? {}) as Record<string, unknown> }]);
    }, []);

    const close = useCallback(() => {
        setStack((prev) => prev.slice(0, -1));
    }, []);

    const closeAll = useCallback(() => setStack([]), []);

    const value = useMemo(() => ({ open, close, closeAll }), [open, close, closeAll]);

    return (
        <ModalContext.Provider value={value}>
            {children}
            {stack.map((entry, index) => (
                <Root
                    key={entry.id}
                    entry={entry}
                    isTop={index === stack.length - 1}
                    onClose={close}
                />
            ))}
        </ModalContext.Provider>
    );
};
