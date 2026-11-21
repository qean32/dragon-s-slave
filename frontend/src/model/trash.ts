import type React from 'react';

export type ModalComponent<P = any> = React.ComponentType<P & { onClose: () => void }>;

export interface ModalContextValue {
    open: <P>(Component: ModalComponent<P>, props?: P) => void;
    close: () => void;
    closeAll: () => void;
}
