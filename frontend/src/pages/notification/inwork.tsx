import { Link } from 'react-router-dom';

export const Inwork = () => {

    return (
        <main className="fixed inset-0 flex flex-col items-center justify-center gap-8 bg-darkness px-6 text-center">
            <div className="flex flex-col items-center gap-4">
                <p className="font-bold uppercase tracking-tight text-7xl">
                    В разработке
                    <span className="text-red-800">!</span>
                </p>

                <p className="max-w-md text-sm text-dragon">
                    Кажется этот раздел все еще разрабатывается
                </p>

                <Link to="/">
                    На главную
                </Link>
            </div>

            <img
                src="/icon/no-find-data-1.svg"
                alt=""
                aria-hidden="true"
                className="h-32 w-auto opacity-80 sm:h-40"
            />
        </main >
    );
};
