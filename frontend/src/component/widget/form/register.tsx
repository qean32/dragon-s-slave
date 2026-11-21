import { useState } from 'react';
import { Button, Checkbox, HiddenButton, TextInput } from '@/component/ui';

interface Props {
    onSwitch: () => void;
}

export const RegisterForm = ({ onSwitch }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            // await register(...)
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
            <TextInput name="email" type="email" title="Почта" autoComplete="email" maxLength={64} required />
            <TextInput name="password" type="password" title="Пароль" autoComplete="new-password" required />
            <TextInput name="confirmPassword" type="password" title="Повторите пароль" autoComplete="new-password" required />

            <Checkbox
                name="terms"
                required
                title="Мне больше 18 лет и я согласен с условиями конфиденциальности"
            />

            <div className="mt-auto flex flex-col gap-2">
                <Button type="submit" variant="secondary" size="md" fullWidth loading={loading}>
                    Зарегистрироваться
                </Button>
                <HiddenButton onClick={onSwitch}>Нет аккаунта? Зарегистрироваться</HiddenButton>
            </div>
        </form>
    );
};
