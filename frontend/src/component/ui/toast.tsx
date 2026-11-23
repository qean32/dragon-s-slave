import { Logo } from '@/component/ui';

interface ToastProps {
    t: { id: string; visible: boolean };
    message: string;
}

export const Toast = ({ t, message }: ToastProps) => (
    <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'}
        pointer-events-auto flex max-w-md items-center gap-3 z-50 rounded-lg bg-dark p-4 shadow-lg`}
    >
        <Logo size="icon-md" className="shrink-0" />
        <p className="flex-1 text-sm font-medium text-foreground">{message}</p>
    </div>
);
