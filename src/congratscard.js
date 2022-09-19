import React from "react";

import './congratscard.css';
import img3 from './congrats-card-profile-img.png';
import img6 from './blackwatch.webp';
import { Menu1 } from "./menu1";

export function Congrats()
{
return(
        <div>
        <Menu1/>
<div id="id3">
        <h1 id="id4">Congratulations</h1>
        <div id="id5">
        <img src={img3} id="img3"/>
        <h3 id="h3">Kiran V</h3>
        <p id="p1">Vishnu Institute of Computer Education and Technology,</p>
        <p id="p2">Bhimavaram</p>
        <img src={img6} id="img6"/>
        </div>
</div>
</div>
);
}