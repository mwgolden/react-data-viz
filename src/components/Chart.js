import React from "react"
import { useEffect, useRef } from "react"
import { select } from "d3"

export default function Chart(props) {

    const { children, chart } = props
    const chartRef = useRef()
    const chartBoundsRef = useRef()

    const dimensions = chart.dimensions
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement( child, {chartRef: chartRef, chart: chart})
    })

    useEffect( () => {
        const chart = select(chartRef.current)
        const chartBounds = select(chartBoundsRef.current)

        chart
            .attr('width', dimensions.width)
            .attr('height', dimensions.height)

        chartBounds.style('transform', `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)
    })

    return (
        <svg ref={ chartRef }>
                <g ref={ chartBoundsRef }>
                    {childrenWithProps}
                </g>
        </svg>
    )
}