import { Card, Breadcrumbs } from '@/component/ui';
import { Title } from '@/component/ui/title';
import { FilterCatalog } from '@/component/widget';

const MOCK_ANIME = [
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Тетрадь смерти', rating: 8.6, votesCount: 178577, meta: { year: 2006, status: 'released', episodes: '1' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Атака титанов', rating: 8.6, votesCount: 163844, meta: { year: 2013, status: 'released', episodes: '1' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Твоё имя', rating: 8.8, votesCount: 147202, meta: { year: 2016, status: 'released' }, genres: ['Фильм'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Ванпанчмен', rating: 8.5, votesCount: 145017, meta: { year: 2015, status: 'released', episodes: '1' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Токийский гуль', rating: 7.8, votesCount: 144039, meta: { year: 2014, status: 'released', episodes: '2' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Форма голоса', rating: 8.9, votesCount: 133837, meta: { year: 2016, status: 'released' }, genres: ['Фильм'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Мастера Меча Онлайн', rating: 7.2, votesCount: 129545, meta: { year: 2012, status: 'released', episodes: '1' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Клинок, рассекающий демонов', rating: 8.4, votesCount: 129504, meta: { year: 2019, status: 'released', episodes: '1' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Бездомный Бог', rating: 7.9, votesCount: 127764, meta: { year: 2014, status: 'released', episodes: '1' }, genres: ['ТВ Сериал'] },
    { imageSrc: 'https://i.pinimg.com/736x/21/9b/06/219b0629b165deda8510c01bc2ec3f4a.jpg', title: 'Унесённые призраками', rating: 8.8, votesCount: 121579, meta: { year: 2001, status: 'released' }, genres: ['Фильм'] },
];

export const Catalog = () => {
    return (
        <div className="min-h-screen bg-dark text-text-primary">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-10 lg:px-12">
                <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Каталог аниме' }]} />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-center gap-3">
                        <Title children={"Каталог аниме"} className='font-bold tracking-tight text-platinum sm:text-4xl' as='h1' />
                    </div>

                    <div className="text-sm font-medium text-text-secondary">
                        Найдено <span className="text-text-primary font-semibold">9 639</span> аниме
                        <span className="mx-2 text-border-hover">·</span>
                        страница <span className="text-text-primary font-semibold">1</span> из <span className="text-text-primary font-semibold">482</span>
                    </div>
                </div>

                <div className="flex gap-8 flex-row lg:items-start">

                    <div className="shrink-0 w-fit">
                        <FilterCatalog className="sticky top-6" />
                    </div>

                    <div className="flex flex-1 flex-col gap-8">
                        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-4">
                            {MOCK_ANIME.map((anime, idx) => (
                                <Card key={idx} {...anime} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
