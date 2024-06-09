import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const SearchInput = ({ units, setUnits, setQuery }) => {
    const [city, setCity] = useState('')

    const handleButton = () => {
        if (city !== '') {
            console.log('Setting query with city:', city);
            setQuery({q:city});
        }
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                console.log('Setting query with location:', { lat, lon });
                setQuery({ lat, lon });
            })
        }
    }

    const handleUnits = (e) => {
        const selectedUnits = e.currentTarget.name;
        if (units !== selectedUnits) {
            console.log('Setting units:', selectedUnits);
            setUnits(selectedUnits);
        }
    }

    return (
        <>
            <div>
                <div className='flex flex-row py-4 justify-center items-center '>
                    <div className='flex flex-row justify-center w-3/4 space-x-4 items-center'>
                        <input 
                            type='text' 
                            placeholder='Search the city' 
                            className='focus:outline-none capitalize p-2 w-full shadow-xl placeholder:lowercase' 
                            onChange={(e) => setCity(e.currentTarget.value)} 
                            value={city} 
                        />
                        <CiSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleButton} />
                        <IoLocationOutline size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={handleLocation} />
                    </div>

                    <div className='flex flex-row w-1/4 items-center justify-center'>
                        <button name='metric' className='text-white font-light' onClick={handleUnits}>°C</button>
                        <p className='mx-1'>|</p>
                        <button name='imperial' className='text-white font-light' onClick={handleUnits}>°F</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchInput
