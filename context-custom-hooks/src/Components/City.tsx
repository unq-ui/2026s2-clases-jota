import CityCard from './CityCard';
import ForecastCard from './ForecastCard';

import type { ForecastResponse } from '../Types/ForecastResponse';

type CityProps = {
  data: ForecastResponse;
};

const City = ({ data }: CityProps) => (
  <>
    <CityCard city={data.location} currentInformation={data.current} />
    <ForecastCard forecast={data.forecast} />
  </>
);

export default City;
