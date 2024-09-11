import React from 'react'

export const Experience = (props:any) => {
  return (
    <div>
        <h1 className="md:scroll-m-20 md:pb-2 text-blue-500 md:text-3xl text-sm font-semibold tracking-tight first:mt-0">
        Experience :
      </h1>
      <ol className="md:my-1 md:ml-9 ml-4 md:p-2 list-disc md:text-lg text-xxs font-medium [&>li]:mt-1">
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">{props.firstofficename} :</h4>
          <p className="font-light">
            {props.firstexpdescription}
          </p>
        </li>
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">{props.secondofficename} :</h4>
          <p className="font-light">
            {props.secondexpdescription}
          </p>
        </li>
      </ol>
    </div>
  )
}
