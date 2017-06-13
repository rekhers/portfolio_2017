import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '/Users/Rekha/Dev/react_project/public/stylesheets/aboutStyles.css.js';


/*
*
* about me -- need to potentially download a library to handle small screens.
*
*/
const AboutText = () =>{
    return (
      <div> 
      <span style={styles.bold}> Hi there! </span>
      <div style={styles.aboutText}> 
      I'm a self-taught web developer who arrived at programming through my study of language. 
      In the past couple of years, I have worked mostly on the front-end of data driven applications across various stacks, 
      which has left me with a passion for translating relationships among data into code while creating fun and intuitive user interfaces.    
      </div>

    </div> )
};



const RekhaCutout = () =>{
  return <img style={styles.cutout} src="./public/assets/final_cutout.png" />;
}

/*
*
* white spacer, with the triangle
*
*/
const Section = () => {
  return(
     <div style={styles.aboutContent} id="about_content">
        <RekhaCutout/>
        <AboutText/>
      </div>
    )
}




export default{
  aboutDiv: function(){
    return (<div className="about_section"> 
            <Section/> 
            </div>
            )
  }
}