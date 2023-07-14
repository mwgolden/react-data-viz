import './App.css';
import Histograms from './Histograms'
import ScatterPlot from './components/ScatterPlot';
import { min } from 'd3'

import weatherData from './data/my_weather_data.json'
import DewPointHumidityScatter from './DewPointHumidityScatter';

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
        <DewPointHumidityScatter data={weatherData} />
      </div>
      <div>
        <Histograms metrics={histogramMetrics} data={weatherData} />
      </div>
    </>
  )
}

export default App;
