export default function Chart(props) {
    const { dimensions, children } = props
    
    return (
        <svg width={dimensions.width} height={dimensions.height}>
            <g style={{transform: `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`}}>
                {children}
            </g>
        </svg>
    )
}