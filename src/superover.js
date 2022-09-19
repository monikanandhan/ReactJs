import React from "react";
import './superover.css';
import img1 from './rcb.png';
import img2 from './chennai.jpg';
import { Menu1 } from "./menu1";

export function SuperOver()
{
return(
<div>
    <Menu1/>
<div id="so1">
<h1 id="idd1">Super Over League</h1>
<div class="d-flex flex-row justify-content-start">
<img src={img1} id="img11"/>
<img src={img2} id="img2"/>
</div>
</div>
</div>
);


}