import { FilterMenu } from "@/component/widget/catalog-filter";

export const TYPE_OPTIONS = [
    { value: 'any', label: 'Любой' },
    { value: 'tv', label: 'ТВ' },
    { value: 'movie', label: 'Фильм' },
    { value: 'ova', label: 'OVA' },
    { value: 'ona', label: 'ONA' },
    { value: 'special', label: 'Спецвыпуск' },
];

export const Test = () => {

    return (
        <main className="flex justify-center items-center h-screen">
            <FilterMenu />
        </main >
    );
}
