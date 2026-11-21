import { cn } from '@/lib/func';

interface Props extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    className?: string;
}

export const HiddenButton = ({ children, className, ...rest }: Props) => (
    <button
        type="button"
        {...rest}
        className={cn(
            'text-sm text-red-600 transition-colors cursor-pointer',
            className,
        )}
    >
        {children}
    </button>
);
