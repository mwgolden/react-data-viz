import { min } from 'd3'
import ScatterPlot from './components/ScatterPlot'

export default function DewPointHumidityScatter({ data }){

    const width = min([
        window.innerHeight * 0.9,
        window.innerWidth * 0.9
    ])
    
      let dimensions = {
        width: width,
        height: width,
        margin: {
            top: 10,
            right: 10,
            bottom: 50,
            left: 50
        }
    }
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    return (
        <ScatterPlot 
            data={data} 
            xVariable={'dewPoint'}
            xLabel={'Dew Point (°F)'} 
            yVariable={'humidity'} 
            yLabel={'Relative Humidity'}
            zVariable={'cloudCover'} 
            dimensions={dimensions}
        />
        
    )

}