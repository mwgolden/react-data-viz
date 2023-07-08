import { min, extent, scaleLinear } from 'd3'
import { BottomAxis, LeftAxis } from './components/Axes'
import Chart from './components/Chart'
import ScatterPlot from './components/ScatterPlot'
import Label from './components/Label'

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

    const accessors = {
        yAccessor: d => d.dewPoint,
        xAccessor: d => d.humidity
    }

    const scales = {
        xScale: scaleLinear()
                    .domain(extent(data, accessors.xAccessor))
                    .range([0, dimensions.boundedWidth])
                    .nice(),
        yScale: scaleLinear()
                    .domain(extent(data, accessors.yAccessor))
                    .range([dimensions.boundedHeight, 0])
                    .nice()
    }

    const chartInfo = {
        dimensions: dimensions,
        accessors: accessors,
        scales: scales,
        data: data
    }

    return (
        <Chart chart={chartInfo}>
            <LeftAxis />
            <ScatterPlot />
            <BottomAxis>
                <Label dimensions={dimensions}>Dew Point (&deg;F)</Label>
            </BottomAxis>
        </Chart>
        
    )

}