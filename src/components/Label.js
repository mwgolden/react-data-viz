
export default function Label(props) {
    const { dimensions, label } = props
    return (
        <text x={dimensions.width / 2} y={dimensions.boundedHeight + dimensions.margin.bottom} fill={'black'}>
            {label}
        </text>
    )
}