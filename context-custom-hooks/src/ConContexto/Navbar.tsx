import { useEffect, useState, type SubmitEvent } from 'react';

import { useWeather } from '../Hooks/WeatherProvider';
import useDebounce from '../Hooks/useDebounce';

import WeatherApi from '../Api/WeatherApi';

import type { City } from '../Types/SearchResponse';

import styles from '../Components/Navbar.module.css';

const Navbar = () => {
  const { changeCity } = useWeather();

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<City[]>([]);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    changeCity(search);
  };

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch.length > 2) {
      WeatherApi.searchCity(debouncedSearch)
        .then(response => setOptions(response))
        .catch(() => console.log('TODO: cambiar por algo posta!!'));
    }
  }, [debouncedSearch]);

  const handleSelectCity = (cityName: string) => {
    changeCity(cityName);
    setSearch('');
    setOptions([]);
  };

  return (
    <nav className={styles.container}>
      <h2>🌞 Weather App</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            aria-label="Search city"
            className={styles.input}
            value={search}
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setSearch(e.target.value)}
          />
          {options.length > 0 && (
            <div className={styles.dropdown}>
              {options.map((city) => (
                <button key={city.id} className={styles.option} onClick={() => handleSelectCity(city.name)} type="button">
                  {city.name}, {city.country}
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
