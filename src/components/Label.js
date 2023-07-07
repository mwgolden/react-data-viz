
export default function Label(props) {
    const { dimensions, children } = props
    return (
        <text x={dimensions.boundedWidth / 2} y={dimensions.boundedHeight + dimensions.margin.bottom - 8} fill={'black'}>
            {children}
        </text>
    )
}