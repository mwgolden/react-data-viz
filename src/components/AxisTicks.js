import Line from "./Line"

export default function AxisTicks(props) {
    const { axisLocation, scale, xStart, xEnd, yStart, yEnd } = props
    const { numTicks } = props
    
    const ticks = scale.ticks()
        .map( (t, i) => {
            const loc = scale(t)
            let line
            if(axisLocation === 'bottom') {
                line = <Line x1={loc} x2={loc} y1={yStart} y2={yStart + 5} stroke="blue" />
            }
            if(axisLocation === 'left') {
                line = <Line x1={xStart} x2={xStart - 5} y1={loc} y2={loc} stroke="blue" />
            }
            return (
                <g key={i}>
                    {line}
                    <text 
                        x={loc}
                        y={yStart + 20}
                        fill='blue'
                        textAnchor='middle'
                        fontSize={10}
                    >
                        {t}
                    </text>
                </g>
            )
        })

    return (
        <g>
            {ticks}
        </g>
    )
    
}