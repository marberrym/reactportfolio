import React from 'react';
import '../styles/homehead.css';
import Typography from '@material-ui/core/Typography';

let HomeHead = () => <div className="headShotContainer">
    <img className="headShot" src="./assets/headShot.jpg"/>
    <div>
        <Typography variant="h2">Matthew Marberry</Typography>
        <Typography variant="h3">Matthew Marberry</Typography>
        <Typography variant="h4">Matthew Marberry</Typography>
    </div>
</div>

export default HomeHead;