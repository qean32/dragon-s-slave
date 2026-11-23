import { LogoIcon } from "@/assets/icon"

export const TechWork = () => {
    document.title = "Тех. перерыв"

    return (
        <div className="h-full flex justify-center items-center fixed inset-0">
            <div>
                <p className="uppercase text-3xl -translate-x-2">Технический перерыв!</p>
                <LogoIcon className="my-2" />
                <p className="mt-3">Сайт проходит тех обзор</p>
                <p className="text-sm">А как часто <span className="text-red-800 text-2xl">вы</span> играете в d&d?</p>
            </div>
        </div>
    )
}
