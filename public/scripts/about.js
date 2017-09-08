import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/about.css.js';
import { Tools } from '../scripts/tools.js';



const Bio = () => {
    return <div style={styles.bio}> I'm a javascript developer excited about visualizing data and 
                          thinking about ways to make the world a better and/or funner place.
                                    
                                     I've gone down the React rabbit hole this past year, and I'm a better person for it.
                                    
                                    Writing code is my vehicle to exploring the things that I'm passionate about &mdash; music, language, and social justice. 
    </div> 
    
}


const Pic = () =>{
  return ( <div style={styles.cont}>
  <img style={styles.pic} src='public/circle_face.gif'/>
  </div>
  )
    
}



export const About = () => {
  return (
    <div id="about" > 
      <div style={styles.container}>
      <Pic />
          <Bio /> 
      </div>
      <Tools />
    </div> 
    )

}


