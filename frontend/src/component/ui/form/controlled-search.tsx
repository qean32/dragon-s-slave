import { cn } from "@/lib/func"

interface Props {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const ControlledSearch: React.FC<Props> = ({ setValue, value }: Props) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Поиск..."
            className={cn(
                'w-full rounded-lg border border-transparent bg-dark px-3 py-2 text-sm',
                'text-dragon-text-primary placeholder:text-dragon-text-secondary',
                'outline-none transition-colors focus:border-dragon-magic',
            )}
            onClick={(e) => e.stopPropagation()}
        />
    )
}
