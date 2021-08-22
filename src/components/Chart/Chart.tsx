import './Chart.css';
import ChartBar from './ChartBar';

interface IDataPoint {
    value: number;
    label: string;
}

function Chart({dataPoints}: { dataPoints: IDataPoint[] }) {
    const maxValue = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => (
                <ChartBar value={dataPoint.value}
                          maxValue={maxValue}
                          label={dataPoint.label}
                          key={dataPoint.label}/>)
            )}
        </div>
    );
}

export default Chart;
