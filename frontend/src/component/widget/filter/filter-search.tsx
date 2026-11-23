import * as React from 'react';
import { cn } from '@/lib/func';
import { SearchIcon } from '@/assets/icon';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

export const FilterSearch = React.forwardRef<HTMLInputElement, Props>(
    ({ className, ...rest }, ref) => (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dragon-text-muted" />
            <input
                ref={ref}
                type="text"
                className={cn(
                    'w-full rounded-md bg-dragon-base px-9 py-2.5 text-sm text-dragon-text-primary placeholder:text-dragon-text-muted outline-none transition-colors focus:ring-1 focus:ring-dragon-magic',
                    className,
                )}
                {...rest}
            />
        </div>
    ),
);

FilterSearch.displayName = 'FilterSearch';
