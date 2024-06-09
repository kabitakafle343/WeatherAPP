import React from 'react'
import { formatToLocalTime } from '../Services/WaetherService'

const TimeAndLocation = ({weather:{dt,timezone,name,country}}) => {
  return (
<>
    <div>
        <div className='my-2 flex-row flex  justify-center items-center w-full'>
    <p className='text-white font-extralight text-xl'>
      {formatToLocalTime(dt,timezone)}</p>
    </div>
    <div className='my-4 flex-row flex items-center justify-center'>
    <p className='text-white font-medium text-3xl'>
{`${name},${country}`}
</p>

    </div>

      
    </div>
</>
  )
}

export default TimeAndLocation