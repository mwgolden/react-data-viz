import * as d3 from 'd3'

import Axis from './Axis'
import Chart from './Chart'

export default function MyFirstChart({ weatherData }) {
    const dateParser = d3.timeParse('%Y-%m-%d')
    const yAccessor = d => d.temperatureMax
    const xAccessor = d => dateParser(d.date)

    let dimensions = {
        width: window.innerWidth * 0.9,
        height: 400,
        margin: {
            top: 15,
            right: 15, 
            bottom: 40, 
            left: 60
        }
    }

    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    const yScale = d3.scaleLinear()
        .domain(d3.extent(weatherData, yAccessor))
        .range([dimensions.boundedHeight, 0])

    const xScale = d3.scaleTime()
        .domain(d3.extent(weatherData, xAccessor))
        .range([0, dimensions.boundedWidth])

    const lineGenerator = d3.line()
        .x(d => xScale(xAccessor(d)))
        .y(d => yScale(yAccessor(d)))
    
    const line = <path 
                    d={lineGenerator(weatherData)}
                    fill='none'
                    stroke='#af9358'
                    strokeWidth={2}
                />
    const [xStart, xEnd] = xScale.range()
    const [yStart, yEnd] = yScale.range()
    const yTicks = yScale.ticks()
        .map( (t, i) => {
            const y = yScale(t)
            return (
                <>
                    <line x1={xStart} x2={xStart - 5} y1={y} y2={y} stroke="blue" />
                    <text 
                        x={xStart - 20}
                        y={y}
                        fill='blue'
                        textAnchor='middle'
                        fontSize={10}
                    >
                        {t}
                    </text>
                </>
            )
        })
    const xTicks = xScale.ticks()
        .map( (t, i) => {
            const x = xScale(t)
            return (
                <>
                    <line x1={x} x2={x} y1={yStart} y2={yStart + 5} stroke="blue" />
                    <text 
                        x={x}
                        y={yStart + 20}
                        fill='blue'
                        textAnchor='middle'
                        fontSize={10}
                    >
                        {t.toLocaleDateString()}
                    </text>
                </>
            )
        })
        
        let yAxis = <Axis xStart={xStart} xEnd={xStart} yStart={yStart} yEnd={yEnd} ticks={yTicks} />
        let xAxis = <Axis xStart={xStart} xEnd={xEnd} yStart={yStart} yEnd={yStart} ticks={xTicks} />
    return (
        <Chart dimensions={dimensions}>
            <g style={{transform: `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`}}>
                {yAxis}
                {line}
                {xAxis}
            </g>
        </Chart>
    )
}

