import React, { useEffect, useState } from 'react';
import { FaStreetView } from "react-icons/fa";
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('pokhara');

  useEffect(() => {
    const fetchApi = async () => {
        setTimeout(async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8f7e9db4c2f5df3da7e56b6f7fe24f30`;
      const res = await fetch(url);
      const resjson = await res.json();
      setCity(resjson);
      console.log(resjson) 
        }, 1000);
        return clearTimeout;
    };

    fetchApi();
  }, [search]);

  return (
    <div className="beautiful-wave-box">
      <div className="content-container">
        <input
          type="text"
          placeholder="Enter something"
          className="beautiful-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {!city ? (<div className='h'><h2>city not found</h2></div>):(<div className='data'>
      <div className='heading'>
      <FaStreetView style={{ height: '5rem', width: '5rem' }} /> <h2>{search}</h2>
        </div>
        <div className='rest'>
        {city && city.main && <h1>{city.main.temp} °C</h1>}
      {city&&city.main&&city.main.temp_min&&city.main.temp_max&&<h4>Min:{city.main.temp_min} °C||Max:{city.main.temp_max} °C</h4>}
 
      </div>
      </div>)}
      
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave wave2"></div>
      </div>
    </div>
  );
};

export default Weather;


