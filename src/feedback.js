import { faFaceGrinWide, faFaceSadTear, faSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

// import './home.scss';
import './feedback.css';

export function Feedback()
{
    return(
<div>
    <div id="m1">
<div id="m2">
<p id="para1">How satisfied are you  with our<br/> customer support performance</p>
<div id="m3">
<Link to='/feedback2'><FontAwesomeIcon icon={faFaceSadTear} id="ic1"/></Link>
<Link to='/feedback2'><FontAwesomeIcon icon={faSmile} id="ic2"/></Link>
<Link to='/feedback2'><FontAwesomeIcon icon={faFaceGrinWide} id="ic3"/></Link>
<div class="para3" >
   <p id="para4">Sad</p>
    <p id="para5">none</p>
    <p id="para12">happy</p>
</div>
</div>
</div>

    </div>

</div>
    );
}