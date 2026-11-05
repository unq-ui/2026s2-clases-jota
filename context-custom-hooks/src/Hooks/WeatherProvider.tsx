import { createContext, use,  useEffect, useState, type ReactNode } from 'react';

import WeatherApi from '../Api/WeatherApi';

import type { ForecastResponse } from '../Types/ForecastResponse';

type WeatherContextProps = {
  data?: ForecastResponse;
  loading: boolean;
  currentCity: string;
  changeCity: (city: string) => void;
};

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

type WeatherProviderProps = {
  children: ReactNode;
};

const WeatherProvider = ({ children }: WeatherProviderProps) => {

  const [currentCity, setCurrentCity] = useState('New York');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ForecastResponse>();

  useEffect(() => {
    WeatherApi.getForecast(currentCity)
      .then((response) => setData(response))
      .catch(() => console.log('TODO: cambiar por algo posta!!'))
      .finally(() => setLoading(false));
  }, [currentCity]);

  const handleChangeCity = (city: string) => {
    setLoading(true);
    setData(undefined);
    setCurrentCity(city);
  };
  
  return (
    <WeatherContext.Provider value={{ data, loading, currentCity, changeCity: handleChangeCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => {
  const context = use(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

export default WeatherProvider;
