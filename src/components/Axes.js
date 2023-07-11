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

    const styles = {
    }
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement( child, {
            x: dimensions.boundedWidth / 2,
            y: dimensions.boundedHeight + 40,
            fill: 'black',
            fontSize: '0.75em',
            styles: styles
        })
    })

    useEffect( () => {
        const xAxis = select(xAxisRef.current)
        xAxis.append('g')
            .call(xAxisGenerator)
                .style('transform', `TranslateY(${dimensions.boundedHeight}px)`)
    }, [xAxisGenerator, dimensions.boundedHeight])

    return (
        <g ref={xAxisRef}>
            {childrenWithProps}
        </g>
    )
}

function LeftAxis(props){
    const { children } = props
    const { yScale } = props.chart.scales
    const dimensions = props.chart.dimensions
    const leftAxisGenerator = axisLeft().scale(yScale)
    const leftAxisRef = useRef()

    const styles = {
        transform: 'rotate(-90deg)',
        textAnchor: 'middle'
    }
    const childrenWithProps = React.Children.map(children, child => {
        return React.cloneElement( child, {
            x: -dimensions.boundedHeight / 2,
            y: -dimensions.margin.left + 20,
            fill: 'black',
            fontSize: '0.75em',
            styles: styles
        })
    })

    useEffect( () => {
        const leftAxis = select(leftAxisRef.current)
        leftAxis.append('g')
            .call(leftAxisGenerator)
    }, [leftAxisGenerator, dimensions.boundedWidth])

    return (
        <g ref={leftAxisRef}>
            {childrenWithProps}
        </g>
    )
}

export {
    TopAxis,
    RightAxis,
    BottomAxis,
    LeftAxis
}