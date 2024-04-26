import { cn } from '@/lib/utils';
import React from 'react'

export type CardProps = {
    label: string;
    amount: string;
    description: string;
}

export default function Card(props: CardProps) {
  return (
    <CardContent>
        <section className='flex justify-between gap-2'>
            {/* label */}
            <div className="text-sm">{props.label}</div>
        </section>
        <section className='flex flex-col gap-1'>
            <h2 className='text-2xl font-semibold'>{props.amount}</h2>
            <p className="text-xs text-gray-500">{props.description}</p>
        </section>
    </CardContent>
  )
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>){
    return (
    <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow",props.className)}/>
)}