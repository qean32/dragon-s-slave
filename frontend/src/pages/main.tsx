import { Button, Checkbox, TextInput } from "@/component/ui";
import { Hint, HintContent, HintTrigger } from "@/component/ui/hint";
import { ConfirmModal, Dropdown, DropdownItem } from "@/component/widget";
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
                <TextInput name="zxc" maxLength={20} placeholder="почта" />
                <div className="">
                    <Hint className="w-fit">
                        <HintTrigger>
                            <p>
                                Архивировать
                            </p>
                        </HintTrigger>
                        <HintContent>Проект переместится в архив</HintContent>
                    </Hint>
                </div>
                <div className="">
                    <Dropdown
                        align="end"
                        trigger={<p className="h-5 w-5 text-dragon-text-secondary hover:text-red-400">zxczzxc</p>}
                    >
                        <DropdownItem onClick={() => console.log('edit')}>Редактировать</DropdownItem>
                        <DropdownItem danger onClick={() => console.log('delete')}>Удалить</DropdownItem>
                    </Dropdown>
                </div>
                <TextInput name="zxc" maxLength={20} placeholder="username" />
                <Checkbox title='Мне больше 18 лет и я согласен с условиями конфиденциальности' />
                <Button type="button" children="Регистрация" size="md" variant="primary" onClick={() => toast_("")} />
                <Button type="button" children="Регистрация" size="md" variant="secondary" onClick={() => toast_("")} />
                <Button type="button" children="Регистрация" size="md" variant="ghost" onClick={() => toast_("")} />
                <Button type="button" children="Регистрация" size="md" variant="danger" onClick={handleDelete} />
            </form>
        </main >
    );
}
