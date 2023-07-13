import { useRef, useEffect } from "react"
import { select, bin, scaleLinear, max, extent } from "d3"
import Chart from "./Chart"
import { BottomAxis } from "./Axes"
import Label from "./Label"


function Bins(props) {

    const { bins } = props
    const { scales, accessors, dimensions, metric } = props.chart

    const binsGroupRef = useRef()

    useEffect( () => {

        const binsGroup = select(binsGroupRef.current) 

        binsGroup
            .attr('tabindex', '0')
            .attr('role', 'list')
            .attr('aria-label', 'histogram bars')

        const binGroups = binsGroup.selectAll('g')
            .data(bins)
            .enter().append('g')
            .attr('tabindex', '0')
            .attr('role', 'listitem')
            .attr('aria-label', d => `There were ${accessors.yAccessor(d)} days between ${
                d.x0.toString().slice(0, 4)
            } and ${
                d.x1.toString().slice(0, 4)
            } ${metric} levels`)

        const barPadding = 1

        
        binGroups
            .append('rect')
            .attr('x', d => scales.xScale(d.x0) + barPadding / 2)
            .attr('y', d => scales.yScale(accessors.yAccessor(d)))
            .attr('width', d => max([0, scales.xScale(d.x1) - scales.xScale(d.x0) - barPadding]))
            .attr('height', d => dimensions.boundedHeight - scales.yScale(accessors.yAccessor(d)))
            .attr('fill', 'cornflowerblue')

        binGroups.filter(accessors.yAccessor)
            .append('text')
            .attr('x', d => scales.xScale(d.x0) + (scales.xScale(d.x1) - scales.xScale(d.x0)) / 2)
            .attr('y', d => scales.yScale(accessors.yAccessor(d)) - 5)
            .text(accessors.yAccessor)
            .attr('fill', 'darkgrey')
            .style('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('font-family', 'sans-serif')

    }, [bins,  dimensions.boundedHeight, scales, accessors, metric])


    return (
        <g ref={binsGroupRef}></g>
    )

}

export default function Histogram(props) {

    const { data, dimensions, metric } = props.chart

    const accessors = {
        metricAccessor: d => d[metric],
        yAccessor: d => d.length
    }

    const xScale = scaleLinear()
            .domain(extent(data, accessors.metricAccessor))
            .range([0, dimensions.boundedWidth])
            .nice()

    const binsGenerator = bin()
        .domain(xScale.domain())
        .value(accessors.metricAccessor)
        .thresholds(12)

    const bins = binsGenerator(data)

    const yScale = scaleLinear()
            .domain([0, max(bins, accessors.yAccessor)])
            .range([dimensions.boundedHeight, 0])
            .nice()
    
    const scales = {
        xScale, yScale
    }

    let chartInfo = {
        metric: metric,
        dimensions: dimensions,
        accessors: accessors,
        scales: scales,
        data: data
    }

    

    return (
        <Chart chart={chartInfo}>
            <Bins bins={bins} />
            <BottomAxis>
                <Label>{metric}</Label>
            </BottomAxis>
        </Chart>
        
    )

}