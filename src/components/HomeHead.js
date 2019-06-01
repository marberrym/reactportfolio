import React from 'react';
import '../styles/homehead.css';
import Typography from '@material-ui/core/Typography';

let HomeHead = (props) => <div className="headShotContainer">
    <img className="headShot" src="./assets/headShot.jpg"/>
    <div className="textContainer">
        <Typography variant="h4" className="nameFont">Matthew Marberry</Typography>
        <div className="iconContainer">
            <a href="https://www.linkedin.com/in/matthewmarberry"><i class="fab fa-linkedin fa-2x icon"></i></a>
            <a href="https://www.github.com/marberrym"><i class="fab fa-github fa-2x icon"></i></a>
            <a href="mailto:marberrym@gmail.com?subject=I got a chance to visit your portfolio and..."><i class="far fa-envelope fa-2x icon"></i></a>
            <a href="https://codepen.io/Jaydoe/"><i class="fab fa-codepen fa-2x icon"></i></a>
        </div>
        <div className="subtitleContainer">
            <Typography variant="subtitle1" className="subtitleText">A driven and passionate full-stack software developer</Typography>
            <Typography variant="subtitle1" className="subtitleText">dedicated to providing</Typography>
            <Typography variant="subtitle1" className="subtitleText"><span className="reliableSpan">Reliable Solutions</span> for <span className="reliableSpan">Real-world Problems.</span></Typography>
        </div> 
    </div>
</div>

export default HomeHead;