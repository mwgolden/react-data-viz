import Histogram from './components/Histogram'

export default function HumidityHistogram({ metric, data }){


    //Create dimensions
    const width = 600

    const dimensions = {
        width: width,
        height: width * 0.6,
        margin: {
            top: 30,
            right: 10,
            bottom: 50,
            left: 50
        }
    }

    dimensions.boundedWidth = dimensions.width - dimensions.margin.right - dimensions.margin.left
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom


    let chart = {
        metric: metric,
        dimensions: dimensions,
        data: data
    }

    return (
        <Histogram chart={chart} />
    )
}