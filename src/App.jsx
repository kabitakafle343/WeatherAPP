import { useEffect, useState } from "react"
import Details from "./Components/Details.jsx"
import ForeCast from "./Components/ForeCast"
import Nav from "./Components/Nav"
import SearchInput from "./Components/SearchInput"
import TimeAndLocation from "./Components/TimeAndLocation"
import  getFormattedWeatherData from "./Services/WaetherService.jsx"



function App() {
  const [query,setQuery]=useState({q:'london'})
  const [units,setUnits]=useState('metric');
  const [weather,setWeather]=useState(null)
  const formatBackground=()=>{
    if(!weather) return 'bg-blue-600'
    const threshold=units=='metric'?20:60;
    if(weather.temp<=threshold) return "bg-blue-200"
    return 'from-yellow-700 to-orange-700'

  }

  useEffect(() => {
    const fetchWeather=async()=>{
    await getFormattedWeatherData({...query,...units}).then(data=>{setWeather(data)});

  
  
    }
    fetchWeather()
 
  }, [query,units]);

 

  return (
    <>
   {weather && <div className={`mx-auto shadow-lg shadow-gray-400  h-fit mt-4 md:px-32 py-4 max-w-screen-md px-10
    bg-blue-800 ${formatBackground()}`}>
  <Nav setQuery={setQuery}/>
  <SearchInput setQuery={setQuery} units={units} setUnits={setUnits} />
  <TimeAndLocation weather={weather}/>
 
 <Details weather={weather}/>
 <ForeCast title='Hourly ForeCast' items={weather.hourly} />
 <ForeCast title='Daily ForeCast' items={weather.daily} />
</div>
     }   

    </>
  )
}

export default App





// https://chatgpt.com/share/3ec9ca78-9bdb-4b45-9ec5-b87d58da0b6a
