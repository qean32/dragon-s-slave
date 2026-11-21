import { useState } from 'react';
import { Button, GoogleButton, HiddenButton, TextInput } from '@/component/ui';

interface Props {
    onSwitch: () => void;
}

export const LoginForm = ({ onSwitch }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            // await login(...)
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
            <TextInput name="email" type="email" title="Почта" autoComplete="email" required />
            <TextInput name="password" type="password" title="Пароль" autoComplete="current-password" required />

            <div className="mt-auto flex flex-col gap-2">
                <Button type="submit" variant="secondary" size="md" fullWidth loading={loading}>Войти</Button>
                <GoogleButton />
                <HiddenButton onClick={onSwitch}>Нет аккаунта? Зарегистрироваться</HiddenButton>
            </div>
        </form>
    );
};
