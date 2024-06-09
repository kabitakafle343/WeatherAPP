import React from 'react';
import { iconUrlFromCode } from '../Services/WaetherService';

const ForeCast = ({title,items}) => {
  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col mt-2 items-start justify-start w-full'>
          <p className='text-white font-medium uppercase'>
          {title}
          </p>
          <hr className='my-2 w-full'/>
          <div className='flex flex-row items-center  text-white w-full  justify-between '>
          {items.map((item)=>{
            return(
            <div className='flex flex-col items-center justify-center '>
              <p className='font-light text-sm'>{item.title}</p>
              <img src={iconUrlFromCode(item.icon)} alt='img' className='w-8 my-1' />
              <p className='font-medium'>{`${item.temp.toFixed().slice(0,2)}°`}</p>
            </div>

         ) })}
           
            {/* <div className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>04:30</p>
              <img src='https://t4.ftcdn.net/jpg/01/25/86/35/360_F_125863509_jaISqQt7MOfhOT3UxRTHZoEbMmmFYIr8.jpg' alt='img' className='w-8 my-1' />
              <p className='font-medium'>23</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>04:30</p>
              <img src='https://t4.ftcdn.net/jpg/01/25/86/35/360_F_125863509_jaISqQt7MOfhOT3UxRTHZoEbMmmFYIr8.jpg' alt='img' className='w-8 my-1' />
              <p className='font-medium'>23</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>04:30</p>
              <img src='https://t4.ftcdn.net/jpg/01/25/86/35/360_F_125863509_jaISqQt7MOfhOT3UxRTHZoEbMmmFYIr8.jpg' alt='img' className='w-8 my-1' />
              <p className='font-medium'>23</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='font-light text-sm'>04:30</p>
              <img src='https://t4.ftcdn.net/jpg/01/25/86/35/360_F_125863509_jaISqQt7MOfhOT3UxRTHZoEbMmmFYIr8.jpg' alt='img' className='w-8 my-1' />
              <p className='font-medium'>23</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ForeCast;


