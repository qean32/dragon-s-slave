import React from 'react'
import { cn, getBetweenNumber } from '@/lib/func'
import { Logo } from '@/component/ui'
import { useBoolean } from '@/lib/hook'
import { tip } from '@/config'
import { Portal } from '@/component/core'

interface Props {
    infinity?: boolean
}


export const MainLoader: React.FC<Props> = ({ }: Props) => {
    const { boolean, off } = useBoolean(true)
    const ref = React.useRef(tip[getBetweenNumber(1, tip.length)])

    React.useEffect(() => {
        setTimeout(off, 2000)
    }, [])

    return (
        <Portal>
            <div className={cn("fixed flex-col gap-7 inset-0 bg-color-darkness flex justify-center items-center transition-300", (!boolean && 'pointer-events-none opacity-0'))} style={{ zIndex: '60' }}>
                <Logo size='icon-2xl' />
                <p className='text-xl max-w-1/3 text-center'>
                    {ref.current ?? tip[0]}
                </p>
            </div>
        </Portal>
    )
}
