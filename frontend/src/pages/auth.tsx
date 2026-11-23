import { useState } from 'react';
import { LoginForm, RegisterForm } from '@/component/widget';
import { Title } from '@/component/ui/title';
import { cn } from '@/lib/func';

type Mode = 'login' | 'register';

export const Auth = () => {
    const [mode, setMode] = useState<Mode>('login');
    const isLogin = mode === 'login';

    return (
        <main className="flex min-h-dvh flex-col items-center justify-center bg-dragon-pattern px-4 py-2">
            <div className="w-100 max-w-4xl rounded-2xl bg-darkness p-8 pt-4 shadow-lg backdrop-blur-sm">
                <div className="grid">
                    <section
                        aria-hidden={!isLogin}
                        className={cn(
                            'col-start-1 row-start-1 flex flex-col gap-4',
                            'transition-all duration-300 ease-out',
                            isLogin
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-4 opacity-0 pointer-events-none',
                        )}
                    >
                        <header className="flex flex-col gap-1 text-center">
                            <Title size="md">Вход</Title>
                            <p className="text-sm text-dragon-text-muted">Войдите, чтобы продолжить</p>
                        </header>
                        <LoginForm onSwitch={() => setMode('register')} />
                    </section>

                    <section
                        aria-hidden={isLogin}
                        className={cn(
                            'col-start-1 row-start-1 flex flex-col gap-4',
                            'transition-all duration-300 ease-out',
                            !isLogin
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-4 opacity-0 pointer-events-none',
                        )}
                    >
                        <header className="flex flex-col gap-1 text-center">
                            <Title size="md">Регистрация</Title>
                            <p className="text-sm text-dragon-text-muted">Создайте аккаунт, чтобы начать</p>
                        </header>
                        <RegisterForm onSwitch={() => setMode('login')} />
                    </section>
                </div>
            </div>
        </main>
    );
};
