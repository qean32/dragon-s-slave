import { Button, Checkbox, TextInput } from "@/component/ui";
import { ConfirmModal } from "@/component/widget";
import { toast_ } from "@/lib/func";
import { useModal } from "@/lib/hook";


export const Main = () => {
    const { open, close } = useModal();

    const handleDelete = () => {
        open(ConfirmModal, {
            title: 'Удалить героя?',
            onConfirm: () => { /* ... */ close(); },
        });
    };

    return (
        <main className="p-5 flex justify-center items-center h-screen">
            <form action="" className="flex gap-2 flex-col w-100">
                <TextInput maxLength={20} placeholder="почта" />
                <TextInput maxLength={20} placeholder="username" />
                <Checkbox title='Мне больше 18 лет и я согласен с условиями конфиденциальности' />
                <Button type="button" children="Регистрация" size="md" variant="primary" onClick={() => toast_("")} />
                <Button type="button" children="Регистрация" size="md" variant="secondary" onClick={() => toast_("")} />
                <Button type="button" children="Регистрация" size="md" variant="ghost" onClick={() => toast_("")} />
                <Button type="button" children="Регистрация" size="md" variant="danger" onClick={handleDelete} />
            </form>
        </main >
    );
}
