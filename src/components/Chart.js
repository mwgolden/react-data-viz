export default function Chart(props) {
    const { dimensions, children } = props
    return (
        <svg width={dimensions.width} height={dimensions.height}>
            {children}
        </svg>
    )
}