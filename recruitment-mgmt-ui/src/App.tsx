import React from 'react';

// import { Route, Switch } from 'react-router-dom';
import './App.css';
import JobCards from './components/Dashboard/JobCard';
import MiniDrawer from './components/Navbar/Drawer.component';



const App:React.FunctionComponent= ()=> {
  

  
  return (
   
    <div className="App">

       <MiniDrawer/>
       <JobCards/>
    
    </div>
  );
}

export default App;
