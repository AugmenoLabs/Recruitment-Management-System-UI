import React from 'react';

// import { Route, Switch } from 'react-router-dom';
import './App.css';
import MiniDrawer from './components/Navbar/drawer.component';
// import Navbar from './components/Navbar/navbar.component';
// import { BrowserRouter, Route } from 'react-router-dom'
// import Counter from './components/Counter/Counter';
// import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { counterActions } from './redux/counter/slice';
import Dashboard from './pages/Dashboard/dashboard.component';
import JobCards from './components/Dashboard/JobCard';
// import MiniDrawer from './components/Navbar/Drawer.component';



const App:React.FunctionComponent= ()=> {
  

  
  return (
   
    <div className="App">

       <MiniDrawer/>
       {/* <JobCards/> */}
    
    </div>
  );
}

export default App;
