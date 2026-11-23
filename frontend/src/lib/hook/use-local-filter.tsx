import * as React from 'react';

interface FilterableOption {
    label: string;
}

interface UseFilteredOptionsParams<T extends FilterableOption> {
    options: T[];
    query: string;
    getSearchText?: (option: T) => string;
}

export const useLocalFilter = <T extends FilterableOption>({
    options,
    query,
    getSearchText,
}: UseFilteredOptionsParams<T>) => {
    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return options;

        return options.filter((o) => {
            const text = (getSearchText?.(o) ?? o.label).toLowerCase();
            return text.includes(q);
        });
    }, [options, query, getSearchText]);

    return {
        filtered,
        isEmpty: filtered.length === 0,
    };
};
