
export default function ScatterPlot(props) {

    const { data } = props
    const { xScale, yScale } = props.scales
    const { xAccessor, yAccessor } = props.accessors

    const dots = data.map( (d, i) => {
        return <circle 
                    key={i}
                    cx={xScale(xAccessor(d))}
                    cy={yScale(yAccessor(d))}
                    r={5}
                />
    })

    return (
        <g>
         {dots}
        </g>
    )
}