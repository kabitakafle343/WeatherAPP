import React from 'react'
import { TiThermometer } from "react-icons/ti";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { FaCloudSunRain } from "react-icons/fa";
import { FiSunset } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { formatToLocalTime, iconUrlFromCode } from '../Services/WaetherService';

const Details = ({weather:{details,temp,icon,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like,timezone}}) => {
  return (
<>
<div>
<div className='flex flex-col items-center justify-center py-2 text-xl text-cyan-300 '>
<p>{details}</p>
<div className=' justify-between flex flex-row items-center  py-3 text-white w-full'> 
<img src={iconUrlFromCode(icon)} alt='img' className='w-10' />
<p className='text-5xl'>{`${temp.toFixed().slice(0,2)}°`}</p>
<div className='flex flex-col space-y-2'>
    <div className='flex font-light text-sm items-center justify-center flex-row'>
    <TiThermometer size={25} className='mr-1'/>
Real Fell:
<span className='font-medium ml-1'>{`${feels_like.toFixed().slice(0,2)}°`}</span>

    </div> <div className='flex font-light text-sm items-center justify-center'>
    <WiHumidity size={25} className='mr-1'/>
Humidity:
<span className='font-medium ml-1'>{`${humidity.toFixed()}`}%</span>

    </div>

    <div className='flex font-light text-sm items-center justify-center'>
    <WiStrongWind size={25} className='mr-1'/>
Wind:
<span className='font-medium ml-1'>{`${speed.toFixed()}`}Km/h</span>

    </div>
</div>
</div>

</div>
<div className='flex flex-row items-center justify-center space-x-2 text-white test-sm py-1 '>

<FaCloudSunRain />
<p className='font-light ml-1'>Rise:<span>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span></p>
<p className='font-light'>|</p>
<FiSunset  />
<p className='font-light ml-1 '>Set:<span>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span></p>
<p className='font-light'>|</p>
<FaArrowUpLong  />
<p className='font-light ml-1 '>High:<span>{`${temp_max.toFixed().slice(0,2)}°`}</span></p>
<p className='font-light'>|</p>
<FaArrowDownLong  />
<p className='font-light ml-1 '>Low:<span>{`${temp_min.toFixed().slice(0,2)}°`}</span></p>
<p className='font-light'>|</p>
</div>
</div>
</>
  )
}

export default Details