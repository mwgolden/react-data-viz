import Line from "./Line";

function TopAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [xStart, xEnd] = xScale.range()
    const [_, yEnd] = yScale.range()

    return (
        <Line x1={xStart} x2={xEnd} y1={yEnd} y2={yEnd} stroke="blue">
            {children}
        </Line>
    )
}

function RightAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [_, xEnd] = xScale.range()
    const [yStart, yEnd] = yScale.range()

    return (
        <Line x1={xEnd} x2={xEnd} y1={yStart} y2={yEnd} stroke="blue">
            {children}
        </Line>
    )
}

function BottomAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [xStart, xEnd] = xScale.range()
    const [yStart, _] = yScale.range()

    return (
        <Line x1={xStart} x2={xEnd} y1={yStart} y2={yStart} stroke="blue">
            {children}
        </Line>
    )
}

function LeftAxis(props){
    const { children } = props
    const { xScale, yScale } = props.scales

    const [xStart, _] = xScale.range()
    const [yStart, yEnd] = yScale.range()

    return (
        <Line x1={xStart} x2={xStart} y1={yStart} y2={yEnd} stroke="blue">
            {children}
        </Line>
    )
}

export {
    TopAxis,
    RightAxis,
    BottomAxis,
    LeftAxis
}