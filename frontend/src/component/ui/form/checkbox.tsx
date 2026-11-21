import { cn } from "@/lib/func"
import React, { useCallback, useId } from "react"

interface CheckboxProps extends React.ComponentProps<"input"> {
    title: string
    className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ title, className, ...rest }: CheckboxProps) => {
    const id = useId()
    const ref = React.useRef<null | HTMLButtonElement>(null)
    const checkHandler = useCallback(() => {
        if (ref.current) {
            ref.current.disabled = !ref.current.disabled
        }
    }, [])

    return (
        <div className={cn('cursor-pointer flex gap-2', className)} onChange={checkHandler}>
            <input hidden className="checkbox-pop" type="checkbox" id={id} {...rest} />
            <label htmlFor={id} className='text-[11px] flex gap-5 text-justify'>
                {title}
                <span className='checkbox-pop-label-span pt-0.5'></span>
            </label>
        </div>
    );
}
