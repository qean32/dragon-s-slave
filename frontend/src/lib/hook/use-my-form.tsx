import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm, SubmitErrorHandler } from "react-hook-form";
import z from "zod";
import React from "react";
import { toast_ } from "@/lib/func";

export const useMyForm = <T extends FieldValues,>(
    schema: z.ZodObject<T> | any,
    submitCallBack: Function,
    submitErrorCallBack?: Function,
) => {
    const form = useForm<T>({
        mode: 'onSubmit',
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<T> = (data: T) => {
        if (data) {

            submitCallBack(data)
        }
        toast_("Обработка...")
    }
    const onError: SubmitErrorHandler<T> = React.useCallback((data) => {
        if (data) {

            submitErrorCallBack && submitErrorCallBack(data)
        }
        console.log('АП:', data);
        toast_('Поля заполнены некорректно')
    }, [])
    const submitHandler = form.handleSubmit(onSubmit, onError)


    return { submitHandler, form, clear: form.reset }
}
