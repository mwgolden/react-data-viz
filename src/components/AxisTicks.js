

export default function AxisTicks(props) {
    const { scale, axis,  numTicks } = props
    const { xStart, xEnd, yStart, yEnd } = props

    scale.ticks()
        .map( (t, i) => {
            const loc = scale(t)
            let line
            if(axis === 'bottom') {
                line = <Line x1={loc} x2={loc} y1={yStart} y2={yStart + 5} stroke="blue" />
            }
            if(axis === 'left') {
                line = <line x1={xStart} x2={xStart - 5} y1={loc} y2={loc} stroke="blue" />
            }
            return (
                <>
                    {line}
                    <text 
                        x={x}
                        y={yStart + 20}
                        fill='blue'
                        textAnchor='middle'
                        fontSize={10}
                    >
                        {t}
                    </text>
                </>
            )
        })
    
}