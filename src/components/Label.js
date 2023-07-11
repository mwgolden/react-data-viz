
export default function Label(props) {
    const { children, x, y, fill, fontSize, styles } = props
    return (
        <text style={styles} x={x} y={y} fill={fill} fontSize={fontSize}>
            {children}
        </text>
    )
}