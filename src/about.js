import React from "react";
import './App.css';
import img from './img1.jpg';

export function About()
{
    return(
<div>
    <div className="div4">
    <img src={img} className='img'/>
    <p>Wikipedia is hosted by the Wikimedia Foundation, 
                a non-profit organization that also hosts a range of other projects.
        You can support our work with a donation.Wikipedia is hosted by the Wikimedia Foundation, 
                a non-profit organization that also hosts a range of other projects.
        You can support our work with a donation.</p>
</div>
</div>

    );
}