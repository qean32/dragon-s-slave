import * as React from 'react';
import { Hint, HintContent, HintTrigger } from '@/component/ui/hint';
import { cn } from '@/lib/func';

export interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
    href?: string;
}

export const SidebarItem = ({
    icon,
    label,
    active = false,
    onClick,
    href,
}: SidebarItemProps) => {
    const Comp = href ? 'a' : 'div';

    return (
        <Hint className="w-fit" positioning={{ placement: 'right', gutter: '0px' }}>
            <HintTrigger>
                <Comp
                    href={href}
                    onClick={onClick}
                    type={href ? undefined : 'button'}
                    aria-label={label}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                        'relative flex h-11 w-11 items-center justify-center rounded-xl',
                        'transition-colors duration-200',
                        'outline-none focus-visible:ring-2 focus-visible:ring-red-700',
                        active
                            ? 'bg-red-900/40 text-red-300'
                            : 'text-dragon-text-secondary hover:bg-dragon-elevated hover:text-red-300',
                    )}
                >
                    <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
                    {active && (
                        <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-red-700" />
                    )}
                </Comp>
            </HintTrigger>
            <HintContent>{label}</HintContent>
        </Hint>
    );
};
