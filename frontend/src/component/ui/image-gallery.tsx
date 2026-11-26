import * as React from 'react';
import { cn } from '@/lib/func';

interface Props {
    images: string[];
    className?: string;
}

export const ImageGallery = ({ images, className }: Props) => {
    const [activeIdx, setActiveIdx] = React.useState(0);

    return (
        <div className={cn('flex flex-col gap-3', className)}>
            {/* Главное изображение */}
            <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl border-smoke-border bg-dark-card">
                <img
                    src={images[activeIdx]}
                    alt="Character"
                    className="h-full w-full object-cover transition-opacity duration-300"
                />
            </div>

            {/* Миниатюры */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-smoke-border">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            className={cn(
                                'relative h-16 w-12 shrink-0 overflow-hidden rounded-md border-2 transition-colors',
                                activeIdx === idx ? 'border-magic' : 'border-transparent opacity-60 hover:opacity-100',
                            )}
                        >
                            <img src={img} alt="" className="h-full w-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
