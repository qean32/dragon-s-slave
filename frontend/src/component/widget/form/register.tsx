import { Button, Checkbox, GoogleButton, HiddenButton, TextInput } from '@/component/ui';
import { registrationFormSchema, registrationSchema } from '@/model';
import { useMyForm } from '@/lib/hook';
import { FormProvider } from 'react-hook-form';

interface Props {
    onSwitch: () => void;
}

export const RegisterForm = ({ onSwitch }: Props) => {
    const { form, submitHandler } =
        useMyForm<registrationFormSchema>(
            registrationSchema,
            (data: registrationFormSchema) => { },
            () => { }
        )

    return (
        <FormProvider {...form}>
            <form onSubmit={submitHandler} className="flex flex-1 flex-col gap-4">
                <TextInput name="email" type="email" title="Почта" autoComplete="email" maxLength={64} required />
                <TextInput name="password" type="password" title="Пароль" autoComplete="new-password" required />
                <TextInput name="confirmPassword" type="password" title="Повторите пароль" autoComplete="new-password" required />

                <Checkbox
                    name="terms"
                    required
                    title="Мне больше 18 лет и я согласен с условиями конфиденциальности"
                />

                <div className="mt-auto flex flex-col gap-2">
                    <Button type="submit" variant="secondary" size="md" fullWidth>Зарегистрироваться</Button>
                    <GoogleButton />
                    <HiddenButton onClick={onSwitch}>Нет аккаунта? Зарегистрироваться</HiddenButton>
                </div>
            </form>
        </FormProvider>
    );
};
