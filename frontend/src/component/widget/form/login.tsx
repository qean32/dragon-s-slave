import { Button, GoogleButton, HiddenButton, TextInput } from '@/component/ui';
import { useMyForm } from '@/lib/hook';
import { loginFormSchema, loginSchema } from '@/model';
import { FormProvider } from 'react-hook-form';

interface Props {
    onSwitch: () => void;
}

export const LoginForm = ({ onSwitch }: Props) => {
    const { form, submitHandler } =
        useMyForm<loginFormSchema>(
            loginSchema,
            (data: loginFormSchema) => { },
            () => { }
        )

    return (
        <FormProvider {...form}>
            <form onSubmit={submitHandler} className="flex flex-1 flex-col gap-4" >
                <TextInput name="email" type="email" title="Почта" autoComplete="email" required />
                <TextInput name="password" type="password" title="Пароль" autoComplete="current-password" required />

                <div className="mt-auto flex flex-col gap-2">
                    <Button type="submit" variant="secondary" size="md" fullWidth>Войти</Button>
                    <GoogleButton />
                    <HiddenButton onClick={onSwitch}>Нет аккаунта? Зарегистрироваться</HiddenButton>
                </div>
            </form>
        </FormProvider>
    );
};
