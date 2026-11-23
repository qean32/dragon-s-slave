import * as React from 'react';
import { cn } from '@/lib/func';
import { FilterHeader } from './filter-header';
import { FilterSearch } from './filter-search';
import { FilterChip } from './filter-chip';
import { FilterSelect } from './filter-select';
import { FilterSection } from './filter-section';

// Иконки для секций и чипов (можно заменить на свои)
import { HomeIcon, ThreePointIcon, SearchIcon } from '@/assets/icon';

interface Props {
    className?: string;
}

export const FilterMenu = ({ className }: Props) => {
    const [search, setSearch] = React.useState('');
    const [chips, setChips] = React.useState<string[]>([]);
    const [status, setStatus] = React.useState('any');
    const [type, setType] = React.useState('any');
    const [myList, setMyList] = React.useState('any');
    const [genre, setGenre] = React.useState('all');
    const [theme, setTheme] = React.useState('all');
    const [studio, setStudio] = React.useState('all');

    const toggleChip = (chip: string) => {
        setChips((prev) =>
            prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
        );
    };

    const handleReset = () => {
        setSearch('');
        setChips([]);
        setStatus('any');
        setType('any');
        setMyList('any');
        setGenre('all');
        setTheme('all');
        setStudio('all');
    };

    return (
        <aside className={cn('flex w-[320px] flex-col gap-6 rounded-xl border border-dragon-border bg-dark p-5', className)}>
            <FilterHeader onReset={handleReset} />

            <FilterSearch
                placeholder="Поиск аниме..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Чипы */}
            <div className="grid grid-cols-2 gap-2">
                <FilterChip
                    icon={<span className="text-dragon-magic">◎</span>}
                    active={chips.includes('ongoing')}
                    onClick={() => toggleChip('ongoing')}
                >
                    Онгоинги
                </FilterChip>
                <FilterChip
                    icon={<span className="text-dragon-fire">🔥</span>}
                    active={chips.includes('top')}
                    onClick={() => toggleChip('top')}
                >
                    Топ сезона
                </FilterChip>
                <FilterChip
                    icon={<span className="text-dragon-fire">📈</span>}
                    active={chips.includes('popular')}
                    onClick={() => toggleChip('popular')}
                >
                    Популярное
                </FilterChip>
                <FilterChip
                    icon={<span className="text-dragon-magic">⚡</span>}
                    active={chips.includes('new')}
                    onClick={() => toggleChip('new')}
                >
                    Новые серии
                </FilterChip>
            </div>

            <hr className="border-dragon-border" />

            {/* Статус и Тип */}
            <div className="grid grid-cols-2 gap-3">
                <FilterSelect
                    label="Статус"
                    options={[
                        { value: 'any', label: 'Любой' },
                        { value: 'ongoing', label: 'Выходит' },
                        { value: 'released', label: 'Завершено' },
                    ]}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <FilterSelect
                    label="Тип"
                    options={[
                        { value: 'any', label: 'Любой' },
                        { value: 'tv', label: 'ТВ' },
                        { value: 'movie', label: 'Фильм' },
                    ]}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </div>

            <hr className="border-dragon-border" />

            {/* Мой список */}
            <FilterSection icon={<SearchIcon className="h-4 w-4" />} title="Мой список">
                <FilterSelect
                    options={[
                        { value: 'any', label: 'Любые' },
                        { value: 'watching', label: 'Смотрю' },
                        { value: 'planned', label: 'В планах' },
                    ]}
                    value={myList}
                    onChange={(e) => setMyList(e.target.value)}
                />
            </FilterSection>

            {/* Жанры */}
            <FilterSection icon={<HomeIcon className="h-4 w-4" />} title="Жанры">
                <FilterSelect
                    options={[
                        { value: 'all', label: 'Все жанры' },
                        { value: 'action', label: 'Экшен' },
                        { value: 'comedy', label: 'Комедия' },
                    ]}
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </FilterSection>

            {/* Темы */}
            <FilterSection icon={<ThreePointIcon className="h-4 w-4" />} title="Темы">
                <FilterSelect
                    options={[
                        { value: 'all', label: 'Все темы' },
                        { value: 'school', label: 'Школа' },
                        { value: 'music', label: 'Музыка' },
                    ]}
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                />
            </FilterSection>

            {/* Студия */}
            <FilterSection icon={<HomeIcon className="h-4 w-4" />} title="Студия">
                <FilterSelect
                    options={[
                        { value: 'all', label: 'Все студии' },
                        { value: 'mappa', label: 'MAPPA' },
                        { value: 'ufotable', label: 'ufotable' },
                    ]}
                    value={studio}
                    onChange={(e) => setStudio(e.target.value)}
                />
            </FilterSection>
        </aside>
    );
};
