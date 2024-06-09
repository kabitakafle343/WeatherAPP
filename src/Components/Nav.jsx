import React from 'react'

const Nav = ({setQuery}) => {
  return (
    <div className='flex flex-row  justify-between items-center my-4 cursor-pointer'>
      <h4 className='text-white font-medium text-lg ' onClick={()=>setQuery({q:'Nepal'})}>Nepal</h4>
      <h4 className='text-white font-medium text-lg 'onClick={()=>setQuery({q:'spain'})}>Spain</h4>
      <h4 className='text-white font-medium text-lg ' onClick={()=>setQuery({q:'tokyo'})}>Tokyo</h4>
      <h4 className='text-white font-medium text-lg' onClick={()=>setQuery({q:'india'})}>India</h4>
    </div>
  )
}

export default Nav
