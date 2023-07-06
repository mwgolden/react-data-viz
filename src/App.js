import './App.css';
import './components/MyFirstChart'
import MyFirstChart from './components/MyFirstChart';

import weatherData from './data/my_weather_data.json'

function App() {

  return (
    <MyFirstChart weatherData={weatherData} />
    
  )
}

export default App;
