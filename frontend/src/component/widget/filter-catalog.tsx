import { cn } from '@/lib/func';
import { LogoIcon, ThreePointIcon } from '@/assets/icon';
import { HiddenButton, MultipleSelect, Search, Select } from '@/component/ui';
import { useMyForm } from '@/lib/hook';
import { loginFormSchema, loginSchema } from '@/model';
import { FormProvider } from 'react-hook-form';
import { Title } from '../ui/title';

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

export const STATUS_OPTIONS = [
    { value: 'any', label: 'Любой' },
    { value: 'ongoing', label: 'Онгоинг' },
    { value: 'released', label: 'Вышел' },
    { value: 'announced', label: 'Анонс' },
];

export const FilterCatalog = ({ className }: Props) => {
    const { form, clear } =
        useMyForm<loginFormSchema>(
            loginSchema,
            (data: loginFormSchema) => { },
            () => { }
        );

    return (
        <FormProvider {...form}>
            <form>
                <aside className={cn(
                    'flex w-100 flex-col gap-6 rounded-3xl bg-darkness pb-20 p-10',
                    className
                )}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <ThreePointIcon className='w-5 translate-y-1 rotate-90' />
                            <Title className='mt-0' children="Фильтры" size='sm' />
                        </div>
                        <HiddenButton
                            children="Сбросить"
                            onClick={() => clear}
                        />
                    </div>

                    <Search />

                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-2 gap-3">
                            <Select
                                icon={<LogoIcon />}
                                title="Статус"
                                options={STATUS_OPTIONS}
                                name="status"
                            />
                            <Select
                                icon={<LogoIcon />}
                                title="Тип"
                                options={TYPE_OPTIONS}
                                name="type"
                            />
                        </div>
                    </div>

                    <Select
                        icon={<LogoIcon />}
                        title="Мой список"
                        options={TYPE_OPTIONS}
                        name="myList"
                    />

                    <MultipleSelect
                        icon={<LogoIcon />}
                        title="Жанры"
                        options={TYPE_OPTIONS}
                        name="genres"
                    />

                    <MultipleSelect
                        icon={<LogoIcon />}
                        title="Темы"
                        options={TYPE_OPTIONS}
                        name="themes"
                    />
                </aside>
            </form>
        </FormProvider>
    );
};
