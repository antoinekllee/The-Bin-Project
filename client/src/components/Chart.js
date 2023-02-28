import React, {useEffect, useRef, useState} from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({CSStype,height, width, chartId, chartURL, filter}) => 
{
    const sdk = new ChartsEmbedSDK({baseUrl: chartURL});
    const chartDiv = useRef(null);
    const [rendered, setRendered] = useState(false);
    filter = 
    {
        // '$match': 
        // {
        'date': { $gte: new Date ("2022-08-01"), $lte: new Date("2022-09-01") }
        // }
    }
    
    const [chart] = useState(sdk.createChart({chartId: chartId, height: height, width: width, filter: filter}));
    chart.setAutoRefresh(true);

    useEffect(() => {
       chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
    }, [chart]);

    return <div className={CSStype} ref={chartDiv}/>;
};

export default Chart;