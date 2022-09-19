import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './feedback.css';

export function Feedback2()
{
    return(
<div>
    <div id="m1">
<div id="m2">
<FontAwesomeIcon icon={faHeart} id="ic8"/>
<h3 id="m8">Thank you!</h3>
<p id="para6">We will use your feedback to improve our customer <span id="span8">support performance</span></p>

</div>
    </div>
</div>
    );
}