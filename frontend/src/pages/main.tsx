import { Button, Checkbox, TextInput } from "@/component/ui";
import { toast_ } from "@/lib/func";


export const Main = () => {
    return (
        <main className="p-5 flex justify-center items-center h-100">
            <form action="" className="flex gap-2 flex-col w-100">
                <TextInput maxLength={20} placeholder="почта" />
                <TextInput maxLength={20} placeholder="username" />
                <Checkbox title='Мне больше 18 лет и я согласен с условиями конфиденциальности' />
                <Button type="button" children="Регистрация" size="md" variant="primary" onClick={() => toast_("")} />
            </form>
        </main >
    );
}
