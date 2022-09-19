import React,{useState} from "react";
import './hooks.css';
import { Menu1 } from "./menu1";

export function Hooks()
{
    const [Add, setAdd]=useState(5);

return(
<div><Menu1/>
<div className="h8">

<h1 id="id2">{Add}</h1>
<button id="id1" onClick={()=>setAdd(Add+5) }>ADD</button>
</div>
</div>
);


}