import { cn } from "@/lib/func"
import { useFormContext } from "react-hook-form";

interface Props {
}

export const Search: React.FC<Props> = ({ }: Props) => {
    const { register } = useFormContext();

    return (
        <input
            {...register}
            type="text"
            placeholder="Поиск..."
            className={cn(
                'w-full rounded-lg border border-transparent bg-darkness px-3 py-2 text-sm',
                'text-dragon-text-primary placeholder:text-dragon-text-secondary',
                'outline-none transition-colors focus:border-dragon-magic',
            )}
            onClick={(e) => e.stopPropagation()}
        />
    )
}
