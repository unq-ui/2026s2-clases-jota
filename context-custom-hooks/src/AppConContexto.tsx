import Navbar from './ConContexto/Navbar';
import City from './ConContexto/City';

import WeatherProvider from './Hooks/WeatherProvider';

const App = () => (
  <WeatherProvider>
    <Navbar />
    <main>
      <City />
    </main>
  </WeatherProvider>
);

export default App;
