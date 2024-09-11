import React from 'react'

export const Objective = (props:any) => {
  return (
    <div className='md:mb-5'>
        <h1 className="md:scroll-m-20 md:pb-2 md:text-3xl text-sm font-semibold tracking-tight text-blue-500 first:mt-0">Objective :</h1>
        <p className="md:leading-7 leading-3 md:text-lg text-xxs md:ml-2 md:[&:not(:first-child)]:mt-1 [&:not(:first-child)]:mt-0">{props.objective}</p>
    </div>
  )
}
