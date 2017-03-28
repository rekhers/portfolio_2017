import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//lets figure out how we can use relative paths for this?
import m from '/Users/Rekha/Dev/react_project/public/scripts/main.js';
import styles from '/Users/Rekha/Dev/react_project/public/scripts/styles.css.js';
import cities from '/Users/Rekha/Dev/react_project/public/scripts/cities.js';


/*
*
* Shared Elements
*
*/
const DotNavigation = () =>{
    return (
      <svg id="dots" height="140" width="50">
        <circle className="selected" cx="20" cy="10" r="7" stroke="white" fill="white"/>
       <circle cx="20" cy="40" r="6" fill="none" stroke="black" />
        <circle cx="20" cy="70" r="6" fill="none" stroke="black"/>
        <circle cx="20" cy="100" r="6" fill="none" stroke="black"/>
        <circle cx="20" cy="130" r="6" fill="none" stroke="black"/>
      </svg>
  );
}

const DownArrow = () => {
    return <div className="arrow-down"></div> 
}

/*
*
* SECTIONS
*
*/



const HeaderText = () => {
    return  (
      <div style={styles.header}> 
          <div style={styles.titleStyle}> rekha tenjarla </div>
          <div style={styles.byline}> <span style={styles.bold}> linguist </span> turned <span style={styles.bold}> web developer </span></div>
      </div>);
};



/*
*
* particle background, container
*
*/
const Particles = () =>{
    return <div className="section" style={styles.particles} id="particle-container"></div>;
}


/*
*
* about me -- add text differntiation
*
*/
const About = () =>{
    return (
      <div style={styles.aboutText}> 

      hello! i'm a javascript programmer who is driven by social justice, language, and music 

    </div> )
};


/*
*
* white spacer, with the triangle
*
*/
const Spacer = () => {
  return(
     <div>
        <div style={styles.spacer}> </div>
        <div style={styles.triangle}></div> 
      </div>
    )
}

/*
*
* my background
*
*/
const Background = () => {
    return <div className="section" style={styles.background}> </div>;
}

/*
*
* my background
*
*/
const SpotifyPlaylist = () => {
    return <iframe src="https://open.spotify.com/embed/track/41eiwHEX8iegmqmS2cf7oX" style={styles.spotify}> </iframe>;
}



const Cities = () => {

console.log("cities:");
console.log(cities);


  return(
    <div>
    <cities.Austin/>
    <cities.SouthCollege/>
    <cities.London/>
    </div>)
}


var page = ( <div>
                <Particles/>
                <HeaderText/>
                <About />
                <Spacer/>
                <Background/>
                <Cities/>
                </div>
  );


let container = document.getElementById("container");

ReactDOM.render(page,container);

particleground(document.getElementById('particle-container'), {
    dotColor: 'rgba(255,255,255, 0.3)',
    lineColor: 'rgba(255,255,255, 0.4)',
    parallaxMultiplier: 6.5,
    maxSpeedY: .1,
    maxSpeedX: .01
});










