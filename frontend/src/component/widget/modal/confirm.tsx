import { Button } from "@/component/ui";

export const ConfirmModal = ({ title, onConfirm, onClose }: { title: string; onConfirm: () => void; onClose: () => void }) => (
    <div className="flex flex-col gap-4">
        <h2 className="font-display text-xl">{title}</h2>
        <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>Отмена</Button>
            <Button variant="danger" onClick={onConfirm}>Удалить</Button>
        </div>
    </div>
);
