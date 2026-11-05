import RequestManager from '../Services/RequestManager';

import type { ForecastResponse } from '../Types/ForecastResponse';
import type { SearchCityResponse } from '../Types/SearchResponse';

const getForecast = (location: string): Promise<ForecastResponse> => {
  return RequestManager.get('/forecast.json', {
    params: {
      q: location,
      days: 7,
    },
  });
};

const searchCity = (query: string): Promise<SearchCityResponse> => {
  return RequestManager.get('/search.json', {
    params: { q: query },
  });
};

export default {
  getForecast,
  searchCity,
};
