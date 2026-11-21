import { createContext, useContext } from 'react';
import type { ModalContextValue } from '@/model';

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used within <ModalProvider>');
    return ctx;
};
