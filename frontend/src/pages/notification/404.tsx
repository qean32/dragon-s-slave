import { LogoIcon } from "@/assets/icon";
import { Link, useNavigate } from "react-router-dom"

export const _404 = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="text-5xl -translate-x-2 uppercase">Страница <span className="text-dragon">404</span>!</p>
                <LogoIcon className="my-2" />
                <p className="mt-3">Как вы сюда попали?</p>
                <Link to={'..'}
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}>
                    Назад</Link>
            </div>
        </div>
    )
}
