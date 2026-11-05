import CityCard from '../Components/CityCard';
import ForecastCard from '../Components/ForecastCard';

import { useWeather } from '../Hooks/WeatherProvider';

const City = () => {
  const { loading, data } = useWeather();

  if (loading) {
    return <div> Loading... </div>;
  }

  if (!data) {
    return <div> Search city to see forecast </div>;
  };

  return (
    <>
      <CityCard city={data.location} currentInformation={data.current} />
      <ForecastCard forecast={data.forecast} />
    </>
  );
};

export default City;
