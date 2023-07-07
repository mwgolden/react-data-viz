import React from "react";
import Line from "./Line";

function TopAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [xStart, xEnd] = xScale.range()
    const [_, yEnd] = yScale.range()

    return (
        <>
            <Line x1={xStart} x2={xEnd} y1={yEnd} y2={yEnd} stroke="blue" />
            {children}
        </>
        
    )
}

function RightAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [_, xEnd] = xScale.range()
    const [yStart, yEnd] = yScale.range()

    return (
        <>
            <Line x1={xEnd} x2={xEnd} y1={yStart} y2={yEnd} stroke="blue" />
            {children}
        </>
    )
}

function BottomAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [xStart, xEnd] = xScale.range()
    const [yStart, yEnd] = yScale.range()

    const childrenWithProps = React.Children.map(children, (child, index) => {
        if(React.isValidElement(child)){
            return React.cloneElement(
                child,
                {
                    axisLocation: 'bottom',
                    scale: xScale,
                    xStart: xStart,
                    xEnd: xEnd,
                    yStart: yStart,
                    yEnd: yEnd
                }
            )
        }
    })

    return (
        <g>
            <Line x1={xStart} x2={xEnd} y1={yStart} y2={yStart} stroke="blue" />
            {childrenWithProps}
        </g>
    )
}

function LeftAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [xStart, _] = xScale.range()
    const [yStart, yEnd] = yScale.range()

    return (
        <>
            <Line x1={xStart} x2={xStart} y1={yStart} y2={yEnd} stroke="blue" />
            {children}
        </>
    )
}

export {
    TopAxis,
    RightAxis,
    BottomAxis,
    LeftAxis
}