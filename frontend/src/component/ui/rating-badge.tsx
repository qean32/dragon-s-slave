import { cn } from '@/lib/func';

interface Props {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    colorClass?: string;
}

export const RatingBadge = ({ label, value, icon, colorClass = 'text-magic' }: Props) => (
    <div className="flex items-center gap-2 rounded-md bg-dark-card px-3 py-1.5 border border-smoke-border/50">
        {icon && <span className={cn('flex h-4 w-4 items-center justify-center', colorClass)}>{icon}</span>}
        <span className="text-sm font-bold text-smoke">{value}</span>
        <span className="text-[11px] uppercase tracking-wider text-smoke-muted">{label}</span>
    </div>
);
