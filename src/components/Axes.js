import React, { useRef, useEffect } from "react";
import { axisTop, axisRight, axisBottom, axisLeft, select }  from 'd3'

function TopAxis(props){
    const { children } = props
    const { xScale } = props.chart.scales
    const dimensions = props.chart.dimensions
    const topAxisGenerator = axisTop().scale(xScale)
    
    const topAxisRef = useRef()
    useEffect( () => {
        const topAxis = select(topAxisRef.current)
        topAxis.append('g')
            .call(topAxisGenerator)
    }, [topAxisGenerator, dimensions.boundedHeight])

    return (
        <g ref={topAxisRef}>
            {children}
        </g>
    )
}

function RightAxis(props){
    const { children } = props
    const { yScale } = props.chart.scales
    const dimensions = props.chart.dimensions
    const rightAxisGenerator = axisRight().scale(yScale)
    
    const rightAxisRef = useRef()
    useEffect( () => {
        const rightAxis = select(rightAxisRef.current)
        rightAxis.append('g')
            .call(rightAxisGenerator)
                .style('transform', `translateX(${dimensions.boundedWidth}px)`)
    }, [rightAxisGenerator, dimensions.boundedWidth])

    return (
        <g ref={rightAxisRef}>
            {children}
        </g>
    )
}

function BottomAxis(props){
    const { children } = props
    const { xScale } = props.chart.scales
    const dimensions = props.chart.dimensions
    const xAxisGenerator = axisBottom().scale(xScale)
    
    const xAxisRef = useRef()
    useEffect( () => {
        const xAxis = select(xAxisRef.current)
        xAxis.append('g')
            .call(xAxisGenerator)
                .style('transform', `TranslateY(${dimensions.boundedHeight}px)`)
    }, [xAxisGenerator, dimensions.boundedHeight])

    return (
        <g ref={xAxisRef}>
            {children}
        </g>
    )
}

function LeftAxis(props){
    const { children } = props
    const { yScale } = props.chart.scales
    const dimensions = props.chart.dimensions
    const leftAxisGenerator = axisLeft().scale(yScale)
    
    const leftAxisRef = useRef()
    useEffect( () => {
        const leftAxis = select(leftAxisRef.current)
        leftAxis.append('g')
            .call(leftAxisGenerator)
    }, [leftAxisGenerator, dimensions.boundedWidth])

    return (
        <g ref={leftAxisRef}>
            {children}
        </g>
    )
}

export {
    TopAxis,
    RightAxis,
    BottomAxis,
    LeftAxis
}