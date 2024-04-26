import React from 'react'

type Props = {}
export type SalesProps ={
    name: string,
    metric: number
}

const SalesCard = (props: SalesProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
        <section className="flex justify-between gap-3">
            <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                <img width={200} height={200} src={`https://api.dicebear.com/8.x/initials/svg?seed=${props.name}`} alt="avatar"  />
            </div>
            <div className='text-lg'>
                <p>{props.name}</p>
            </div> 
        </section>
        <p>${props.metric.toLocaleString('en-US', { style: 'decimal' })}</p>
    </div>
  )
}

export default SalesCard