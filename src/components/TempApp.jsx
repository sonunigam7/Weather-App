import { useEffect, useState } from 'react'
import './css/TempApp.css'
const APIKEY = '61476a1479463d602a7e9500544b7874';
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${}&appid=${APIKEY}`;

export default function TempApp() {
    const [city, setCity] = useState(null);
    const [searchQuery, setSearchQuery] = useState('delhi');

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${APIKEY}`;
            const res = await fetch(url);
            const data = await res.json();
            setCity(data.main);
        }
        fetchAPI();
    }, [searchQuery]);
    return (
        <>
            <div className='box'>

                <div className='input-data'>
                    <input type="search"
                        className='inputField'
                        placeholder='Search your city'
                        value={searchQuery}
                        onChange={(event) => { setSearchQuery(event.target.value) }}
                    />
                    <i id='search-icon' className="fa-solid fa-magnifying-glass"></i>
                </div>
                {!city ? (
                    <p>Welcome to Weather App</p>
                )
                    : (
                        <>
                            <div className='info'>
                                <h2 className='location'>
                                    <i className="fa-solid fa-street-view"></i>
                                    {searchQuery}
                                </h2>
                                <h1 className='temp'>
                                    {city.temp}°C
                                </h1>
                                <h3 className='temp-min-max'> <span>Min : {city.temp_min}°Cel </span>
                                <span> Max : {city.temp_max}°Cel
                                </span>

                                </h3>
                            </div>

                            <div class="ocean">
                                <div class="wave"></div>
                                <div class="wave wave2"></div>
                            </div>


                        </>
                    )}



            </div>
        </>

    )
}
