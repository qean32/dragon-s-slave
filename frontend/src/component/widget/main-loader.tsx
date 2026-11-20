import React from 'react';
import { cn, getBetweenNumber } from '@/lib/func';
import { Logo } from '@/component/ui';
import { useBoolean } from '@/lib/hook';
import { tip } from '@/config';
import { Portal } from '@/component/core';

interface Props {
    infinity?: boolean;
    duration?: number;
}

export const MainLoader: React.FC<Props> = ({
    infinity = false,
    duration = 2000,
}) => {
    const { boolean, off } = useBoolean(true);

    const [phrase] = React.useState(() =>
        tip?.[getBetweenNumber(0, (tip?.length ?? 1) - 1)] ?? tip?.[0] ?? '',
    );

    React.useEffect(() => {
        if (infinity) return;

        const timer = setTimeout(off, duration);
        return () => clearTimeout(timer);
    }, [off, duration, infinity]);

    return (
        <Portal>
            <div
                className={cn(
                    'fixed inset-0 flex flex-col gap-7',
                    'bg-dark backdrop-blur-sm z-10',
                    'flex justify-center items-center',
                    'transition-opacity duration-300',
                    !boolean && 'pointer-events-none opacity-0',
                )}
            >
                <Logo size="icon-2xl" />
                <p className="max-w-1/3 text-center text-md">{phrase}</p>
            </div>
        </Portal>
    );
};
