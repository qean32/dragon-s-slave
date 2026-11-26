import { useRef } from "react";
import { Breadcrumbs, ImageGallery, Tag } from "@/component/ui";

export const Character = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const character = {
        name: 'Дворф-шаман',
        nameJp: 'Dwarf Shaman',
        kanji: '鉱人道士',
        gallery: [
            'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg',
            'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg',
            'https://shikimori.io/uploads/poster/characters/159323/main-8c7f91c1d11f577ea1342662a58317e1.webp',
            'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg',
        ],
        rating: 9.6,
        votes: 778,
        tags: ['Фэнтези', 'Приключения', 'Комедия'],
        description: 'Авантюрист серебряного ранга из расы дворфов. Вместе с членами своей группы, эльфийкой-лучникой и ящером-монахом, пришёл к Убийце Гоблинов за помощью в уничтожении гоблинов, бесчинствующих из-за возрождения Короля Демонов в землях эльфов. Постоянно подшучивает над Эльфийкой-лучникой.',
        author: 'Rendels',
        relatedAnime: [
            { id: 1, title: 'Убийца Гоблинов', type: 'TV Сериал', year: '2018', image: 'https://shikimori.io/uploads/poster/animes/35608/main-2b75c5b4b3f3f3f4b4f5f6f7f8f9f0f1.webp' },
            { id: 2, title: 'Убийца Гоблинов: Корона меча', type: 'Фильм', year: '2020', image: 'https://shikimori.io/uploads/poster/animes/40787/main-8c7f91c1d11f577ea1342662a58317e1.webp' },
            { id: 3, title: 'Убийца Гоблинов 2', type: 'TV Сериал', year: '2024', image: 'https://shikimori.io/uploads/poster/animes/52456/main-2b75c5b4b3f3f3f4b4f5f6f7f8f9f0f1.webp' },
            { id: 4, title: 'Убийца Гоблинов: Приключение', type: 'OVA', year: '2022', image: 'https://shikimori.io/uploads/poster/animes/48900/main-8c7f91c1d11f577ea1342662a58317e1.webp' },
        ]
    };

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-dvh bg-dark p-4 font-sans text-smoke lg:p-8">
            <div className="mx-auto max-w-6xl">
                <Breadcrumbs
                    items={[
                        { label: 'Главная', href: '/' },
                        { label: 'Персонажи', href: '/characters' },
                        { label: character.name },
                    ]}
                />

                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
                    <div className="flex flex-col gap-4">
                        <ImageGallery images={character.gallery} />

                        <div className="flex flex-col gap-2">
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-magic px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">
                                В избранное
                            </button>
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-dark-card border border-smoke-border px-4 py-3 text-sm font-bold text-smoke transition-colors hover:bg-dark-hover">
                                Изменить
                            </button>
                            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-dark-card border border-smoke-border px-4 py-3 text-sm font-bold text-dragon transition-colors hover:bg-dark-hover">
                                Удалить
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <header>
                            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                                {character.name}
                            </h1>
                            <p className="text-lg text-smoke-dark">{character.nameJp}</p>
                            <p className="mt-1 text-sm text-smoke-muted">{character.kanji}</p>
                        </header>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-3">
                                <Tag className="flex items-center gap-1.5 border-dragon bg-dragon-soft text-smoke">
                                    {character.rating}
                                </Tag>
                                <Tag>{character.votes} голосов</Tag>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                {character.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </div>
                        </div>

                        <section>
                            <h2 className="mb-3 text-xl font-bold text-white">Описание</h2>
                            <p className="text-[15px] leading-relaxed text-smoke-dark">
                                {character.description}
                            </p>
                        </section>


                        <section className="mt-4">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">Галерея персонажа</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => scroll('left')}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-card border border-smoke-border text-smoke hover:bg-dark-hover transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                    </button>
                                    <button
                                        onClick={() => scroll('right')}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-card border border-smoke-border text-smoke hover:bg-dark-hover transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                    </button>
                                </div>
                            </div>

                            <div
                                ref={sliderRef}
                                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                {character.gallery.map((image, index) => (
                                    <div key={index} className="w-[180px] shrink-0 snap-start cursor-pointer group">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-dark-card">
                                            <img
                                                src={image}
                                                alt={`${character.name} - изображение ${index + 1}`}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-4">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">Связанное аниме</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => scroll('left')}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-card border border-smoke-border text-smoke hover:bg-dark-hover transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                    </button>
                                    <button
                                        onClick={() => scroll('right')}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-card border border-smoke-border text-smoke hover:bg-dark-hover transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                    </button>
                                </div>
                            </div>

                            <div
                                ref={sliderRef}
                                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                {character.relatedAnime.map((anime) => (
                                    <div key={anime.id} className="w-[140px] shrink-0 snap-start cursor-pointer group">
                                        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-smoke-border bg-dark-card mb-2">
                                            <img
                                                src={anime.image}
                                                alt={anime.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-sm font-medium text-smoke line-clamp-2 leading-tight group-hover:text-magic-light transition-colors">
                                            {anime.title}
                                        </h3>
                                        <p className="text-xs text-smoke-muted mt-1">
                                            {anime.type} • {anime.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="mt-4 flex w-fit items-center justify-end gap-2 text-sm text-smoke-muted">
                            Автор:{' '}
                            <span className="cursor-pointer text-magic-light hover:underline">
                                {character.author}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
