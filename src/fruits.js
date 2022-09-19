import React,{useState} from "react";
import './fruits.css';
import img1 from './mango.jpeg';
import img2 from './banana.jpeg'
import { Menu1 } from "./menu1";
export function Fruits()
{
    const [Add1,setAdd1]=useState(0);
    const [Add2,setAdd2] =useState(0);
return(
    <div><Menu1/>
<div className="div11">
<div id="div12">
<h1 id="head1">Bob ate <span id="sp1">{Add1}</span> mangoes <span id="sp1">{Add2}</span> bananas</h1>
<div class="d-flex flex-column justify-content-row">
    <img src={img1} id="image1"/>
    <img src={img2} id="image2"/>
</div>
<button id="id13" onClick={()=>setAdd1(Add1+1)}>Eat Mangoes</button>
<button id="id14" onClick={()=>setAdd2(Add2+1)}>Eat bananas</button>
</div>
</div>
</div>
);


}