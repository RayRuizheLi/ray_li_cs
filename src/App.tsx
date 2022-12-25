import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import './App.css'
import LRUCache from './components/LRUCache';
import MeetingScheduler from './components/MeetingScheduler';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div className="App">
          <Navigation />
            <Routes>
             <Route path="/ray_li_cs" element={<Home/>}/>
             <Route path="/LRUCache" element={<LRUCache/>}/>
             <Route path="/MeetingScheduler" element={<MeetingScheduler/>}/>
            <Route element={<Error/>}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;