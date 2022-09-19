import React from "react";
import './technologycard.css';
import img1 from './Datasci.webp';
import img2 from './iot.png';
import img3 from './vrapp.png';
import img4 from './mleng.png';
import { Menu1 } from "./menu1";

export function Technology()
{
    return(
<div>
    <Menu1/>
    <div id="div5">
    <h1 id="h1">Learn 4.0 Technologies</h1>
     <p id="p11">Get trained by alumini of IITs and top companies like Amazon, Microsoft,Intel,<br/>
     Nividia,Qualcomm,etc.Learn directly from professionals involved in product<br/>
        development.</p>
        <div class="div1">
            <div id="div2">
                <h4 id="h2">Data Scientist</h4>
                <p id="h2">Data Scientists gather and analyze large<br/> sets of  structured and unstructured data </p>
                <img src={img1} id="img1"/>
            </div>
            <div id="div3">
                <h4 id="h2">IoT Developer </h4>
                <p id="h2" >IoT developer are professionals who can develop,manage and monitor IoT devices</p>
                <img src={img2} id="img1"/>
            </div>
        </div>

        <div class="div1">
            <div id="div7">
                <h4 id="h2">VR Developer</h4>
                <p id="h2">A VR developer creates completely new<br/> digital environment that people can use </p>
                <img src={img3} id="img1"/>
            </div>
            <div id="div8">
                <h4 id="h2">ML Engineer </h4>
                <p id="h2" >Machine learn engineers feed data into<br/>models designed by Data Scientists </p>
                <img src={img4} id="img1"/>
            </div>
        </div>


    </div>
</div>

    );
}