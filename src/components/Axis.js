

export default function Axis({xStart, xEnd, yStart, yEnd, ticks}){
    return (
        <g>
            <line x1={xStart} x2={xEnd} y1={yStart} y2={yEnd} stroke="blue" />
            <g className='ticks'>
                {ticks}
            </g>
        </g>
    )
}