import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faNavicon } from '@fortawesome/free-solid-svg-icons'

import classes from './Navbar.module.css'

function AnalyticsPage (props)
{
    return <div className={classes.container}> 
        <FontAwesomeIcon icon={faNavicon} className={classes.menu} />
        <p className={classes.binProject}>The Bin Project</p>
        <p className={classes.username}>Sodexo@UWCSEA East</p>
        {/* Create a profile image for an anonymous user using fontawesome icons */}
        <FontAwesomeIcon icon={faUserCircle} className={classes.pfp} />
        {/* Create a hamburger icon at the top left representing the menu */}
    </div> 
}

export default AnalyticsPage; 