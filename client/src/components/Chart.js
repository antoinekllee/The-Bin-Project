import React, {useEffect, useRef, useState} from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({CSStype, chartId, chartURL }) => 
{
    const sdk = new ChartsEmbedSDK({baseUrl: chartURL});
    const chartDiv = useRef(null);
    const [rendered, setRendered] = useState(false);
    
    const [chart] = useState(sdk.createChart({ chartId }));
    chart.setAutoRefresh(true);

    useEffect(() => {
       chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
    }, [chart]);

    return <div className={CSStype} ref={chartDiv}/>;
};

export default Chart;