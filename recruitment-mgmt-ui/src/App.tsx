import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import MiniDrawer from './components/Navbar/drawer.component';
import Navbar from './components/Navbar/navbar.component';
// import { BrowserRouter, Route } from 'react-router-dom'
// import Counter from './components/Counter/Counter';
// import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { counterActions } from './redux/counter/slice';
import Dashboard from './pages/Dashboard/dashboard.component';
const App:React.FunctionComponent= ()=> {
  // const dispatch = useAppDispatch();

  // const { value } = useAppSelector((state) => state.counter);

  // const increment = (): void => {
  //   dispatch(counterActions.increment());
  // };

  // const decrement = (): void => {
  //   dispatch(counterActions.decrement());
  // };

  // const incrementAsync = (): void => {
  //   dispatch(counterActions.incrementAsync());
  // };

  // const decrementAsync = (): void => {
  //   dispatch(counterActions.decrementAsync());
  // };

  return (
   
    <div className="App">

       <MiniDrawer/>
    <BrowserRouter>
       <Routes>
      <Route path='/' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
