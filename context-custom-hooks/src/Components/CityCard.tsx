import type { CurrentWeather, Location } from '../Types/ForecastResponse';

import styles from './CityCard.module.css';

type CityCardProps = {
  city: Location;
  currentInformation: CurrentWeather;
};

const CityCard = ({ city, currentInformation }: CityCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.cityInfo}>
        <h2>📍 {city.name}</h2>
        <p>{city.country}</p>
      </div>
      <div className={styles.weatherInfo}>
        <img src={currentInformation.condition.icon} alt={currentInformation.condition.text} />
        <div>
          <p>{currentInformation.temp_c}°C</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
