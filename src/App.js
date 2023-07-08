import './App.css';
import DewPointHumidityScatter from './DewPointHumidityScatter';

import weatherData from './data/my_weather_data.json'


function App() {

  return (
    <DewPointHumidityScatter data={weatherData} />
    //<MyFirstChart weatherData={weatherData} />
  )
}

export default App;
