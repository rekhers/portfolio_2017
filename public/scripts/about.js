import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '/Users/Rekha/Dev/react_project/public/scripts/styles.css.js';


/*
*
* about me -- add text differentiation
*
*/
const AboutText = () =>{
    return (
      <div style={styles.aboutText}> 
      hello! i'm a javascript programmer who is driven by social justice, language, and music 
    </div> )
};

const RekhaCutout = () =>{
  return <img style={styles.cutout} src="./public/scripts/final_cutout.png" />;

}

/*
*
* white spacer, with the triangle
*
*/
const Spacer = () => {
  return(
     <div id="spacer">
        <AboutText/>
        <div style={styles.spacer}> 
              <div id="graypanel"></div>
              <div id="whitepanel"></div>
              <RekhaCutout/>
        </div>
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
    return (<div className="section" style={styles.background}> 
              <Spacer/>
    </div>);
}


export default{
  aboutDiv: function(){
    return (<div className="about_section"> 
            <Background/> 
            </div>
            )
  }
}