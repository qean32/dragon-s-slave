import { cn } from '@/lib/func';

import { LogoIcon } from '@/assets/icon';
import { MultipleSelect, Search, Select } from '@/component/ui';
import { useMyForm } from '@/lib/hook';
import { loginFormSchema, loginSchema } from '@/model';
import { FormProvider } from 'react-hook-form';

interface Props {
    className?: string;
}

export const TYPE_OPTIONS = [
    { value: 'any', label: 'Любой' },
    { value: 'tv', label: 'ТВ' },
    { value: 'movie', label: 'Фильм' },
    { value: 'ova', label: 'OVA' },
    { value: 'ona', label: 'ONA' },
    { value: 'special', label: 'Спецвыпуск' },
];

export const FilterMenu = ({ className }: Props) => {
    const { form } =
        useMyForm<loginFormSchema>(
            loginSchema,
            (data: loginFormSchema) => { },
            () => { }
        )


    return (
        <FormProvider {...form}>
            <form>

                <aside className={cn('flex w-[320px] flex-col gap-6 rounded-xl bg-dark p-5', className)}>
                    <Search />

                    <div className="flex flex-col gap-4">
                        <Select icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} name="zxc" />
                        <Select icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} name="zxc" />
                    </div>

                    <MultipleSelect icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} name="zxc" />
                    <MultipleSelect icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} name="zxc" />
                </aside>
            </form>
        </FormProvider>
    );
};
