import React, { useState } from 'react';

import classes from './LogMenu.module.css'

function LogMenu ()
{
    const [observationIndex, setObservationIndex] = useState(0);

    const observations = 
    [
        "The most wasteful day of the week has been Wednesdays for the last 6 weeks.",
        "Dal Curry is the most wasted dish, and Dabbawala is the most wasteful stall.",
        "There is 19% less wastage than last week. Well done!"
    ]

    const selectObservation = (event) => 
    {
        setObservationIndex(event.target.value);
        console.log (event.target.value);
    }

    return <div className={classes.container}>
        <div className={classes.content}>
            <h1 className={classes.title}>Log Findings</h1>
            <h2>Observation</h2>
            <select value={observationIndex} onChange={selectObservation} className={classes.dropdown} >
                { observations.map((observation, index) => 
                    <option key={index} value={index}>{observation}</option>)
                }
            </select>
            <h2>Qualitative Findings</h2>
            <textarea className={classes.textArea} />
            <button className={classes.button}>Submit</button>
        </div>
    </div>
}

export default LogMenu; 