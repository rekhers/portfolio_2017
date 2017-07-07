import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '/Users/Rekha/Dev/react_project/public/stylesheets/aboutStyles.css.js';
import FontAwesome from 'react-fontawesome';

/*
*
* white spacer, with the triangle
*
*/
const AboutSection = () => {
  return(
     <div className="about" id="about_content">
     adfasfasfasf
      </div>
    )
}

const NavBar = () => {
  return(
      <div style={styles.nav}>
        <div> About </div> 
        <div> Projects </div> 
        <div> Contact </div>  
         <div> Blog </div> 


      </div>
    )
}

export default{
  aboutDiv: function(){
    return (<div className="about_section"> 
            <AboutSection/> 
            </div>
            )
  }
}








/*
*
* about me -- need to potentially download a library to handle small screens.
*
*/
// const AboutText = () =>{
//     return (
//       <div> 
//       <span style={styles.bold}> hello! </span>
//       <div style={styles.aboutText}> 
//       I'm a self-taught web developer who arrived at programming through my study of language. 
//       In the past couple of years, I have worked mostly on the front-end of data driven applications across various stacks, 
//       which has left me with a passion for translating relationships among data into code while creating fun and intuitive user interfaces.    
//       </div>

//     </div> )
// };