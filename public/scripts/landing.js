import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import m from '/Users/Rekha/Dev/react_project/public/scripts/main.js';
import styles from '/Users/Rekha/Dev/react_project/public/scripts/styles.css.js';

console.log(styles.particles);
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

      I'm a javascript programmer who loves 

      
      I'm a javascript programmer who loves translating high level concepts into code and building pixel-perfect user interfaces. 
      React lets me do that by utilizing some of my favorite concepts from both web development and linguistics like compositionality 
      functional programming. 

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





var pageOne = ( <div>
                <Particles/>
                <HeaderText/>
                <About name="Rekha"/>
                <Spacer/>
                <Background/>
                </div>
  );


let container = document.getElementById("container");

ReactDOM.render(pageOne,container);

particleground(document.getElementById('particle-container'), {
    dotColor: 'rgba(255,255,255, 0.3)',
    lineColor: 'rgba(255,255,255, 0.4)',
    parallaxMultiplier: 6.5,
    maxSpeedY: .1,
    maxSpeedX: .01
});










