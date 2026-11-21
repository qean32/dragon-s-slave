import { cn } from '@/lib/func';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    mode?: 'login' | 'register';
    loading?: boolean;
    fullWidth?: boolean;
}

const GoogleIcon = () => (
    <svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2C41 35.5 44 30.2 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
);

const labels = {
    login: { idle: 'Войти через Google', loading: 'Вход...' },
    register: { idle: 'Зарегистрироваться через Google', loading: 'Регистрация...' },
};

export const GoogleButton = ({
    mode = 'login',
    loading = false,
    fullWidth = false,
    disabled,
    className,
    ...rest
}: Props) => {
    const label = labels[mode];

    return (
        <button
            type="button"
            disabled={disabled || loading}
            aria-label={label.idle}
            className={cn(
                'relative inline-flex items-center justify-center gap-3',
                'rounded-md border border-[#dadce0] px-6 py-2.5',
                'text-sm font-medium text-[#3c4043]',
                'cursor-pointer select-none transition-colors duration-200',
                'hover:shadow-sm mt-1',
                'disabled:opacity-45 disabled:cursor-not-allowed',
                fullWidth && 'w-full',
                className,
            )}
            {...rest}
        >
            {loading ? (
                <span className="h-3.5 w-3.5 animate-dragon-spin rounded-full border-2 border-[#4285F4] border-t-transparent" />
            ) : (
                <GoogleIcon />
            )}
            <span>{loading ? label.loading : label.idle}</span>
        </button>
    );
};
