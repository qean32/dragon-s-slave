import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '@/component/ui';
import { cn } from '@/lib/func';
import { SidebarItem } from './sidebar-item';
import { LogoIcon } from '@/assets/icon';

interface Props {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const isActive = (path: string) =>
        path === '/' ? pathname === '/' : pathname.startsWith(path);

    return (
        <aside
            className={cn(
                'fixed left-0 top-0 z-40 flex h-dvh w-16 flex-col items-center',
                'gap-2 bg-dark px-2 py-4 backdrop-blur-sm',
                className,
            )}
        >
            <div className="mb-4">
                <Logo size="icon-md" />
            </div>

            <nav className="flex flex-1 flex-col items-center gap-2" aria-label="Основная навигация">
                <SidebarItem
                    icon={<LogoIcon />}
                    label="Главная"
                    href="/"
                    active={isActive('/')}
                />
                <SidebarItem
                    icon={<LogoIcon fill="blue" />}
                    label="Битвы"
                    onClick={() => navigate('/battle')}
                    active={isActive('/battle')}
                />
                <SidebarItem
                    icon={<LogoIcon />}
                    label="Арсенал"
                    onClick={() => navigate('/armory')}
                    active={isActive('/armory')}
                />
                <SidebarItem
                    icon={<LogoIcon />}
                    label="Летописи"
                    onClick={() => navigate('/lore')}
                    active={isActive('/lore')}
                />
            </nav>

            <div className="flex flex-col items-center gap-2">
                <SidebarItem
                    icon={<LogoIcon />}
                    label="Настройки"
                    onClick={() => navigate('/settings')}
                    active={isActive('/settings')}
                />
            </div>
        </aside>
    );
};
