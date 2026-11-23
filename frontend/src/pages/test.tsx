import { LogoIcon } from "@/assets/icon";
import { MultipleSelect, Select } from "@/component/ui";

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
            <div className="w-50">
                <Select icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} />
                <MultipleSelect icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} />
            </div>
        </main >
    );
}
