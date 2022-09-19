import React from "react";
import './App.css';
import {Link} from 'react-router-dom';
export function Menu1()
{
return(
<div>
<ul>
<Link to='/helloworld'><li>Helloworld</li></Link>
<Link to='/congratscard'><li>Congrats</li></Link>
<Link to='/superover'><li>SuperOver</li></Link>
<Link to='/technologycard'><li>Technology</li></Link>
<Link to='/hooks'><li>Hooks</li></Link>
<Link to='/fruits'><li>Fruits</li></Link>
<Link to='/feedback'><li>Feedback</li></Link>
<Link to='/feedback2'><li>Feedbackshow</li></Link>

</ul>
</div>
);

}