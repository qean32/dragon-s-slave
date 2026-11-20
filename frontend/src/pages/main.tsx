import { Button, TextInput } from "@/component/ui/form";

export const Main = () => {
    return (
        <main className="p-5">
            <form action="" className="flex gap-2 flex-col w-100">
                <TextInput maxLength={22} title="ФИО" />
                <Button children="Регистрация" size="md" variant="primary" />
            </form>
        </main >
    );
}
