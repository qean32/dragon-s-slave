import { zodResolver } from "@hookform/resolvers/zod";
import {
    FieldValues,
    SubmitHandler,
    useForm,
    SubmitErrorHandler,
    Path,
} from "react-hook-form";
import z from "zod";
import React from "react";
import { toast_ } from "@/lib/func";

export const useMyForm = <T extends FieldValues>(
    schema: z.ZodObject<T> | any,
    submitCallBack: (data: T) => void,
    submitErrorCallBack?: (data: any) => void,
) => {
    const form = useForm<T>({
        mode: 'onChange',
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<T> = (data: T) => {
        submitCallBack(data);
        toast_("Обработка...");
    };

    const onError: SubmitErrorHandler<T> = React.useCallback(
        (errors) => {
            Object.keys(errors).forEach((key) => {
                form.resetField(key as Path<T>);
            });

            submitErrorCallBack?.(errors);
            toast_('Поля заполнены некорректно');
        },
        [form, submitErrorCallBack],
    );

    const submitHandler = form.handleSubmit(onSubmit, onError);

    return { submitHandler, form, clear: form.reset };
};
