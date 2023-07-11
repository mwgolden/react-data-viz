import { useRef, useEffect } from "react"
import { select } from "d3"

export default function ScatterPlot(props) {

    const scatterPlotRef = useRef()

    const { data } = props.chart
    const { xScale, yScale, colorScale } = props.chart.scales
    const { xAccessor, yAccessor, colorAccessor } = props.chart.accessors

    useEffect( () => {
        const scatterPlot = select(scatterPlotRef.current)
        const plot = scatterPlot.selectAll('circle').data(data)

        plot.join('circle')
            .attr('cx', d => xScale(xAccessor(d)))
            .attr('cy', d => yScale(yAccessor(d)))
            .attr('r', 5)
            .attr('fill', d => colorScale(colorAccessor(d)))
        
    }, [xScale, yScale, xAccessor, yAccessor, data])

    return (
        <g ref={scatterPlotRef}/>
    )
}