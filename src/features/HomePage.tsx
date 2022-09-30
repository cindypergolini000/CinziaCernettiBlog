import React  from 'react';
import logo from './logo.svg';
import foto from './fotoBadge2.jpg'
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return <div className="App-header">
     <header className="App-header">
     
      <h1 >
     Welcome to my developer blog.
         </h1>
         <div className="right"> <h2>I am an AI developer and Cloud computing advocate specialized in Microsoft technology stack. </h2> <h2 >This website is built using React-TS</h2></div>
      <img src={foto} className="profilePhoto, App-logo" alt="logo" />
     
      <div className="contact2">
        
      <h2 >
        
       Here is a demo of a simple advertising bot for Telegram I've authored using #Azure and #BotFrameworkSDK
         </h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3-zun7dlCHc" ></iframe>
      </div>
    
   
      
      
   
      
         {/* <li className="nav-item">
            <NavLink
              className="APP-Link"
              to="/settings">Questi sono i miei lavori</NavLink>
          </li> */}

        
         {/* <a
           className="App-link"
           href="https://reactjs.org"
          target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a> */}
       </header>
  </div>

};