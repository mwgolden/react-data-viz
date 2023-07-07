import Line from "./Line"

export default function AxisTicks(props) {
    const { axisLocation, scale, xStart, xEnd, yStart, yEnd } = props
    const { numTicks } = props
    
    const ticks = scale.ticks()
        .map( (t, i) => {
            const loc = scale(t)
            let line, txt, tx, ty
            if(axisLocation === 'bottom') {
                tx = loc
                ty = yStart
                line = <Line x1={tx} x2={tx} y1={ty} y2={ty + 5} stroke="blue" />
                txt = <text 
                            x={tx}
                            y={ty + 20}
                            fill='blue'
                            textAnchor='middle'
                            fontSize={10}
                        >
                            {t}
                        </text>
            }
            if(axisLocation === 'left') {
                tx = xStart
                ty = yStart - loc
                line = <Line x1={tx} x2={tx - 5} y1={ty} y2={ty} stroke="blue" />
                txt = <text 
                            x={tx - 20}
                            y={ty}
                            fill='blue'
                            textAnchor='middle'
                            fontSize={10}
                        >
                            {t}
                        </text>
            }
            return (
                <g key={i}>
                    {line}
                    {txt}
                </g>
            )
        })

    return (
        <g>
            {ticks}
        </g>
    )
    
}