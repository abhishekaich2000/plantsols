import React, {useEffect} from 'react'
import "./home.css"
import {
  Link
} from "react-router-dom";

export default function Home() {

  useEffect(() => {
   const textFunc =()=>{
    window.addEventListener('load',function(){
      var welcome = document.querySelector('.greet'),
          subtext = document.querySelector('.subTexts'),
          delay = 1000; 
      setTimeout(function(){welcome.style.top='0';},delay);
      setTimeout(function(){subtext.style.bottom = '0%';},delay*2);
      setTimeout(function(){subtext.style.bottom = '-100%';},delay*4);
       
    });
   }
   textFunc();
  }, [])

  return (
    <div className='home'>
      <div className="content">
        <div className="welcomeText">
          <div className="welcome">
            <h1 className="greet">WELCOME</h1>
          </div>
          <div className="subText">
            <div className="subTexts">
              <p className="subscribe">to grow crops</p>
              <p className="soon">Proving better solution</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/plantsols/feed">
        <button type="button" className="startBtn btn btn-primary">Let's Started</button>
      </Link>
    </div>
  )
}
