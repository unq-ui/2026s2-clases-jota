import { useEffect, useState } from 'react';

import City from './Components/City';
import Navbar from './Components/Navbar';

import WeatherApi from './Api/WeatherApi';

import type { ForecastResponse } from './Types/ForecastResponse';

const App = () => {
  const [currentCity, setCurrentCity] = useState('New York');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    if (!currentCity) return;
    WeatherApi.getForecast(currentCity)
      .then((response) => setData(response))
      .catch(() => console.log('TODO: cambiar por algo posta!!'))
      .finally(() => setLoading(false));
  }, [currentCity]);

  const handleChangeCity = (city: string) => {
    setLoading(true);
    setData(null);
    setCurrentCity(city);
  };

  return (
    <>
      <Navbar changeCity={handleChangeCity} />
      <main>
        {
          loading ? (
            <div>Loading…</div>
          ) : (
            data ? <City data={data} /> : (<div> Search city to see forecast </div>)
          )
        }
      </main>
    </>
  );
};

export default App;
