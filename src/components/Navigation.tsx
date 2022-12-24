import React from 'react';
 
import { NavLink } from 'react-router-dom';
import './components_css/Navigation.css';
 
const Navigation = () => {
    return (
       <div className="Navigation">
          <NavLink className="Navigation-link" to="/">Home</NavLink>
          <NavLink className="Navigation-link" to="/ray_li_cs">Home</NavLink>
          <NavLink className="Navigation-link" to="/LRUCache">EP1 - LRU Cache</NavLink>
          <NavLink className="Navigation-link" to="/MeetingScheduler">EP2 - Meeting Scheduler</NavLink>
       </div>
    );
}
 
export default Navigation;