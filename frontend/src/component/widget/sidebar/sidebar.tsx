import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '@/component/ui';
import { cn } from '@/lib/func';
import { SidebarItem } from './sidebar-item';
import { BookIcon, CommunityIcon, ForgeIcon, HomeIcon, LogoIcon, MapIcon, PersonIcon } from '@/assets/icon';

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
                'gap-2 bg-darkness px-2 py-4 backdrop-blur-sm',
                className,
            )}
        >
            <div className="mb-4">
                <Logo size="icon-md" />
            </div>

            <nav className="flex flex-1 flex-col items-center gap-2" aria-label="Основная навигация">
                <SidebarItem
                    icon={<HomeIcon />}
                    label="Главная"
                    onClick={() => navigate('/')}
                    active={isActive('/')}
                />
                <SidebarItem
                    icon={<BookIcon />}
                    label="Каталог"
                    onClick={() => navigate('/catalog')}
                    active={isActive('/catalog')}
                />
                _
                <SidebarItem
                    icon={<CommunityIcon />}
                    label="auth"
                    onClick={() => navigate('/auth')}
                    active={isActive('/auth')}
                />
                <SidebarItem
                    icon={<LogoIcon />}
                    label="test"
                    onClick={() => navigate('/test')}
                    active={isActive('/test')}
                />
                _
                <SidebarItem
                    icon={<PersonIcon />}
                    label="создание персонажа"
                    onClick={() => navigate('/create-character')}
                    active={isActive('/create-character')}
                />
                <SidebarItem
                    icon={<ForgeIcon />}
                    label="создание предмета"
                    onClick={() => navigate('/create-item')}
                    active={isActive('/create-item')}
                />
                <SidebarItem
                    icon={<MapIcon />}
                    label="создание карты"
                    onClick={() => navigate('/create-map')}
                    active={isActive('/create-map')}
                />
                {/* _
                <SidebarItem
                    icon={<PersonIcon />}
                    label="персонаж"
                    onClick={() => navigate('/character')}
                    active={isActive('/character')}
                />
                <SidebarItem
                    icon={<ForgeIcon />}
                    label="предмет"
                    onClick={() => navigate('/item')}
                    active={isActive('/item')}
                />
                <SidebarItem
                    icon={<MapIcon />}
                    label="карта"
                    onClick={() => navigate('/map')}
                    active={isActive('/map')}
                /> */}
            </nav>

            <div className="flex flex-col items-center gap-2">
                <SidebarItem
                    icon={<LogoIcon />}
                    label="Настройки"
                />
            </div>
        </aside>
    );
};
