import './App.css';
import Histograms from './Histograms'

import weatherData from './data/my_weather_data.json'

const histogramMetrics = [ 
    'windSpeed', 
    'humidity',
    'moonPhase', 
    'dewPoint',
    'uvIndex',
    'windBearing',
    'temperatureMin',
    'temperatureMax'
  ]

function App() {

  return (
    <>
      
      <div>
        <Histograms metrics={histogramMetrics} data={weatherData} />
      </div>
    </>
  )
}

export default App;
