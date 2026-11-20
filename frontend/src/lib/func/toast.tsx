import { Toast } from "@/component/ui";
import toast from "react-hot-toast";

export const toast_ = (message: string) => {
    toast.custom((t) => (
        <Toast t={t} message={message} />
    ), {
        duration: 3000,
        position: 'top-center',
    });
};
