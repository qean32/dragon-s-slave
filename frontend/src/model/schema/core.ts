import z from "zod";

export const password = z
    .string({
        error: (issue) =>
            issue.input === undefined ? 'Пароль обязателен' : undefined,
    })
    .regex(/^[A-Za-z0-9]+$/, 'Пароль должен состоять из латиница и цифр')
    .max(20, { message: 'Максимальная длина - 20' })
    .min(8, { message: 'Минимальная длина - 8' });

export const email = z.email({ message: 'Не валидная почта' });

export const confirmPassword = ({ confirmPassword, password }: { confirmPassword: string, password: string }, ctx: any) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Пароли не совпадают",
            path: ['confirmPassword']
        });
    }
}
