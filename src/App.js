import logo from './logo.svg';
import './App.css';
import './home.scss';


// import { Menu } from './menu';
// import { About } from './about';
// import { Home } from './home';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Menu1 } from './menu1';
import { Hello } from './helloworld';
import { Congrats } from './congratscard';
import { SuperOver } from './superover';
import { Technology } from './technologycard';

import { Feedback } from './feedback';
import { Feedback2 } from './feedback2';
import { Hooks } from './hooks';
import { Fruits } from './fruits';


function App() {
  return (
   <div  class="h1">
     {/* <Menu/>
     <Home/>
     <About/>
     <Home/> */}

   {/* <Hello/>
    <Congrats/>
    <SuperOver/> 
    <Technology/> */}
    
     {/* <Menu1/> */}
     {/* <Fruits/> */}
  {/* <Feedback/>
  <Feedback2/> */}
 
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Menu1/>}/>
<Route path='/helloworld' element={<Hello/>}/>
<Route path='/congratscard' element={<Congrats/>}/>
<Route path='/superover' element={<SuperOver/>}/>
<Route path='/technologycard' element={<Technology/>}/>
<Route path ='/hooks' element={<Hooks/>}/>
<Route path='/fruits' element={<Fruits/>}/>
<Route path='/feedback' element={<Feedback/>}/>
<Route path='/feedback2' element={<Feedback2/>}/>
</Routes>
</BrowserRouter>
   
  
</div>

  );
}

export default App;
