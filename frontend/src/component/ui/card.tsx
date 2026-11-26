import { cn } from '@/lib/func';

interface Props {
    imageSrc: string;
    title: string;
    description?: string;
    /** Средний балл, например 8.5 */
    rating?: number;
    /** Количество оценок (опционально, для подписи) */
    votesCount?: number;
    className?: string;
    onClick?: () => void;
}

export const Card = ({
    imageSrc,
    title,
    description,
    rating,
    votesCount,
    className,
    onClick,
}: Props) => {
    return (
        <article
            onClick={onClick}
            className={cn(
                'group flex w-70 cursor-pointer flex-col overflow-hidden rounded-2xl',
                'bg-dark-primary border border-border',
                'transition-all duration-300 ease-out',
                'hover:border-dragon/50 hover:shadow-[0_8px_24px_rgba(139,30,30,0.15)]',
                className
            )}
        >
            {/* Блок с картинкой */}
            <div className="relative aspect-11/12 w-full overflow-hidden bg-dark">
                <img
                    src={imageSrc}
                    alt={title}
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-out"
                />

                {/* Средний балл (поверх картинки, справа сверху) */}
                {rating !== undefined && (
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-dark/80 px-2 py-1 backdrop-blur-md">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-dragon"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-xs font-bold text-platinum">
                            {rating.toFixed(1)}
                        </span>
                    </div>
                )}
            </div>

            {/* Блок с текстом */}
            <div className="flex flex-1 flex-col gap-1.5 p-4">
                <h3 className="line-clamp-1 text-sm font-bold text-text-primary transition-colors group-hover:text-dragon">
                    {title}
                </h3>

                {description && (
                    <p className="line-clamp-2 text-xs leading-relaxed text-text-secondary">
                        {description}
                    </p>
                )}

                {/* Подпись с количеством оценок (если передано) */}
                {votesCount !== undefined && (
                    <span className="mt-auto pt-2 text-[10px] font-medium text-text-muted">
                        {votesCount.toLocaleString('ru-RU')} оценок
                    </span>
                )}
            </div>
        </article>
    );
};
