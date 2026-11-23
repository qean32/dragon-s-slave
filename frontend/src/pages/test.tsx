import { LogoIcon } from "@/assets/icon";
import { MultipleSelect, Select } from "@/component/ui";
import { useMyForm } from "@/lib/hook";
import { loginFormSchema, loginSchema } from "@/model";
import { FormProvider } from "react-hook-form";

export const TYPE_OPTIONS = [
    { value: 'any', label: 'Любой' },
    { value: 'tv', label: 'ТВ' },
    { value: 'movie', label: 'Фильм' },
    { value: 'ova', label: 'OVA' },
    { value: 'ona', label: 'ONA' },
    { value: 'special', label: 'Спецвыпуск' },
];

export const Test = () => {
    const { form } =
        useMyForm<loginFormSchema>(
            loginSchema,
            (data: loginFormSchema) => { },
            () => { }
        )

    return (
        <main className="flex justify-center items-center h-screen">
            <div className="w-50">
                <FormProvider {...form}>

                    <Select icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} name="zxc" />
                    <MultipleSelect icon={<LogoIcon />} title="Список" options={TYPE_OPTIONS} name="zxczcx" />
                </FormProvider>
            </div>
        </main >
    );
}
