import styles from './ForecastCard.module.css';

import type { Forecast } from '../Types/ForecastResponse';

type ForecastCardProps = {
  forecast: Forecast;
};

const ForecastCard = ({ forecast }: ForecastCardProps) => {
  return (
    <div className={styles.container}>
      {forecast.forecastday.map((day) => (
        <div key={day.date}>
          <h3>{day.date}</h3>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>Max: {day.day.maxtemp_c}°C</p>
          <p>Min: {day.day.mintemp_c}°C</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
