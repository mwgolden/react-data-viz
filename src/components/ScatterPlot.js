import { useRef, useEffect } from "react"
import { min, extent, scaleLinear, select } from 'd3'
import { BottomAxis, LeftAxis } from './Axes'
import Chart from "./Chart"
import Label from "./Label"

export default function ScatterPlot(props) {

    const scatterPlotRef = useRef()

    const { data, xVariable, yVariable, zVariable, dimensions, xLabel, yLabel   } = props

        const yAccessor = d => d[yVariable]

        const xAccessor = d => d[xVariable]

        const colorAccessor = d => d[zVariable]

        const xScale = scaleLinear()
                    .domain(extent(data, xAccessor))
                    .range([0, dimensions.boundedWidth])
                    .nice()

        const yScale = scaleLinear()
                    .domain(extent(data, yAccessor))
                    .range([dimensions.boundedHeight, 0])
                    .nice()

        const colorScale = scaleLinear()
                        .domain(extent(data, colorAccessor))
                        .range(['skyblue', 'darkslategrey'])

        const chartInfo = {
            dimensions: dimensions,
            accessors: {xAccessor, yAccessor, colorAccessor},
            scales: {xScale, yScale},
            data: data
        }

    useEffect( () => {
        const scatterPlot = select(scatterPlotRef.current)
        const plot = scatterPlot.selectAll('circle').data(data)

        plot.join('circle')
            .attr('cx', d => xScale(xAccessor(d)))
            .attr('cy', d => yScale(yAccessor(d)))
            .attr('r', 5)
            .attr('fill', d => colorScale(colorAccessor(d)))
        
    }, [xScale, yScale, xAccessor, yAccessor, colorAccessor, colorScale, data])

    return (
        <Chart chart={chartInfo}>
            <LeftAxis>
                <Label>{yLabel}</Label>
            </LeftAxis>
            <g ref={scatterPlotRef}/>
            <BottomAxis>
                <Label>{xLabel}</Label>
            </BottomAxis>
        </Chart>
        
    )
}